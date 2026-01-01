import * as motion from 'motion/react-client'

export default function WildcardKeyframe() {
  return (
    <motion.div
      style={box}
      whileHover={{
        scale: [null, 1.1, 1.6],
        trastion: { 
          duration: 0.5,
        times: [0, 0.6, 1],
        ease: ["easeInOut", "easeOut"]
       }
      }}
      transtion={{
        duration: 0.3,
        ease: "easeOut",
      }}
    />
  )
}
const box = {
          width: 100,
          height: 100,
          backgroundColor: "#c678dd",
          borderRadius: 5
}
