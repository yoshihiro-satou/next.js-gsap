'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);       // 奥：背景
  const textRef = useRef(null);     // 中：テキスト
  const floatRef = useRef(null);    // 手前：浮遊する要素

  useGSAP(() => {
    // タイムラインを作成して、スクロールと同期させる
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',    // 要素の上が画面の上に来たら開始
        end: 'bottom top',   // 要素の下が画面の上に来たら終了
        scrub: 1,            // スクロールに追従（1秒のラグで滑らかに）
      },
    });

    // 1. 背景（奥）: ゆっくり動く (y: 100px)
    // 画面固定に近い動きをすることで「遠くにある」と感じさせる
    tl.to(bgRef.current, {
      y: 200, 
      ease: 'none',
    }, 0); // 第3引数の '0' は「タイムラインの開始と同時に実行」の意味

    // 2. テキスト（中）: 普通のスクロールより少し速く上へ (y: -200px)
    tl.to(textRef.current, {
      y: -200,
      ease: 'none',
    }, 0);

    // 3. 浮遊要素（手前）: かなり速く移動する (y: -600px)
    // 大きく動くことで「カメラのすぐ近くにある」と感じさせる
    tl.to(floatRef.current, {
      y: -600,
      rotation: 180, // ついでに回転も加えて3D感を強調
      ease: 'none',
    }, 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[150vh] overflow-hidden bg-gray-900">
      
      {/* --- レイヤー1：背景（奥） --- */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-30"
      >
        {/* 背景のグリッド装飾 */}
        <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-black" />
      </div>

      {/* --- レイヤー2：メインコンテンツ（中） --- */}
      <div 
        ref={textRef}
        className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter mix-blend-overlay">
          DEPTH<br />EFFECT
        </h2>
        <p className="text-xl text-gray-300 max-w-lg">
          スクロールしてみてください。<br />
          速度差が空間を生み出します。
        </p>
      </div>

      {/* --- レイヤー3：浮遊要素（手前） --- */}
      {/* ぼかし(blur)を入れると「ピンボケ」効果でさらに手前感が出ます */}
      <div 
        ref={floatRef}
        className="absolute bottom-[-10%] right-[10%] z-20 w-64 h-64 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full blur-2xl opacity-60 pointer-events-none"
      />
      
      {/* もう一つの手前要素（左上） */}
      <div 
        className="absolute top-[20%] left-[10%] z-20 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-40"
        // 簡易的に data-speed 属性で制御する場合の例（別途GSAP設定が必要）
      />

    </section>
  );
}
