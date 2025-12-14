import { X } from "lucide-react"
import { motion } from "motion/react"

const animatedProps = {
    initial: { opacity: 0, y:-100, },
    animate: { opacity: 1, y:100},
    transition: { duration: 0.5 }
}
function AnimatedValue({value}){
    return(
        <motion.span key={value} {...animatedProps}>
            {value}
        </motion.span>
    )
}
export default AnimatedValue