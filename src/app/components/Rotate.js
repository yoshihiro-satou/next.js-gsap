import * as motion from 'motion/react-client'

export default function Rotate() {
  return (
    <motion.div
      style={box}
      animate={{ rotate: 360}}
      transition={{ duration: 1, ease: "linear"}}
    />
  )
}
const box = {
  width: 100,
  height: 100,
  backgroundColor: "#98c379",
  borderRadius: 5
}
