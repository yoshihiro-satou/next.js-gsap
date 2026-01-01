import ThreeDSection from '@/src/app/components/ThreeDSection'
import ParallaxSection from '@/src/app/components/ParallaxSection'
import SpringBox from '@/src/app/components/SpringBox'
import EnterAnimation from '@/src/app/components/EnterAnimation'
import Drag from "@/src/app/components/Drag"
import ExitAnimation from './components/ExitAnimation'
import Gestures from '@/src/app/components/Gestures'
import HTMLContent from '@/src/app/components/HTMLContent'
import Keyframe from '@/src/app/components/Keyframe'
import WildcardKeyframe from '@/src/app/components/WildcardKeyframe'
import Rotate from '@/src/app/components/Rotate'
import TransitionOptions from '@/src/app/components/TransitionOptions'

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
      <div className='h-48 w-full flex items-center justify-center bg-gray-300'>
        <Gestures />
      </div>
      <div className='h-48 w-full flex items-center justify-center bg-gray-300'>
        <HTMLContent />
      </div>
      <div className='h-48 flex w-full items-center justify-center bg-red-200'>
        <Keyframe />
      </div>
      <div className='h-48 flex w-full items-center justify-center bg-gray-300'>
        <WildcardKeyframe />
      </div>
      <div className='h-48 flex w-full items-center justify-center bg-red-200'>
        <Rotate />
      </div>
      <div className='h-85 w-full flex items-center justify-center bg-gray-300'>
        <TransitionOptions />
      </div>
    </>
  );
}
