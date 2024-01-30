import { Variants } from 'framer-motion'

export const fadeInEffect: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}
