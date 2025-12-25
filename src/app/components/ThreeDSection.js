'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// プラグイン登録
gsap.registerPlugin(ScrollTrigger);

export default function ThreeDSection() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    // アニメーションの設定
    gsap.fromTo(
      cardRef.current,
      {
        rotationX: 45,   // 初期状態：奥に倒れている
        rotationY: -20,  // 少し斜め
        opacity: 0,
        z: -500,         // Z軸：奥にある
        scale: 0.8,
      },
      {
        rotationX: 0,    // 最終状態：正面を向く
        rotationY: 0,
        opacity: 1,
        z: 0,
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current, // どの要素が画面に来たら発火するか
          start: 'top 70%',             // 画面の70%の位置に来たら開始
          end: 'bottom 50%',            // 終了位置
          scrub: 1,                     // スクロール量と同期させる（数値は滑らかさ）
          // markers: true,             // 開発時にデバッグ線を表示したい場合ONにする
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="h-screen flex items-center justify-center bg-gray-900 perspective-container"
    >
      {/* perspective: 1000px が重要です。
        これが「カメラと被写体の距離」を定義し、3D効果を生みます。
      */}
      <div 
        ref={cardRef} 
        className="w-[300px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl flex items-center justify-center text-white text-2xl font-bold"
        style={{ transformStyle: 'preserve-3d' }} // 子要素も3D空間に配置
      >
        3D Card
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 1000px; /* 3D空間の深さを指定 */
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
