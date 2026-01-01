"use client"
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
export default function HTMLContent() {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const countrols = animate(count, 100, { duration: 5})
    return () => countrols.stop()
  }, [])
  return <motion.pre style={{ fontSize: 64, color: "61afef"}}>{rounded}</motion.pre>
}
