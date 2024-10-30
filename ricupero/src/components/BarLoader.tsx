import { Variants, motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-orange-400 h-screen w-screen z-50">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
} as Variants;

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-36 w-4 bg-white" />
      <motion.div variants={variants} className="h-36 w-4 bg-white" />
      <motion.div variants={variants} className="h-36 w-4 bg-white" />
      <motion.div variants={variants} className="h-36 w-4 bg-white" />
      <motion.div variants={variants} className="h-36 w-4 bg-white" />
    </motion.div>
  );
};

export default Loading;