import ThreeDSection from '@/src/app/components/ThreeDSection'
import ParallaxSection from '@/src/app/components/ParallaxSection'
import SpringBox from '@/src/app/components/SpringBox'
export default function Home() {
  return (
    <div>
      <div className='h-screen'></div>
      <ThreeDSection />
      <div className='h-screen'></div>
      <ParallaxSection />
      <SpringBox />
    </div>
  );
}
