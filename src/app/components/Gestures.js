import * as motion from "motion/react-client"

export default function Gestures() {
  return <motion.div
          whileHover={{ 
            scale: 1.2,
            rotate: 5,
            backgrounndColor: "#2bb95d",
            trasition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.8,
            rotate: -0.5,
            backgroundColor: "#1a7a3e",
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
          style={box} />
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#46cf76",
  borderRadius: 5
}
