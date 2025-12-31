"use client"
import { motion } from "motion/react"

export default function Drag() {
  return <motion.div drag whileDrag={{ scale: 1.1}} style={box}/>
}
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#2f7cf8",
    borderRadius: 10,
  }
