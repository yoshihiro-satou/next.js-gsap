import ThreeDSection from '@/src/app/components/ThreeDSection'
import ParallaxSection from '@/src/app/components/ParallaxSection'
import SpringBox from '@/src/app/components/SpringBox'
import EnterAnimation from '@/src/app/components/EnterAnimation'
import Drag from "@/src/app/components/Drag"
import ExitAnimation from './components/ExitAnimation'

export default function Home() {
  return (
    <>
      <div className='h-screen'></div>
      <ThreeDSection />
      <div className='h-screen'></div>
      <ParallaxSection />
      <SpringBox />
      <EnterAnimation />
      <Drag />
      <ExitAnimation />
    </>
  );
}
