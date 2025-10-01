import { motion } from "framer-motion";

type CountdownProps = {
  countdown: number;
};

export default function Countdown({ countdown }: CountdownProps) {
  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1.5, transition: { duration: 0.5 } },
  };

  const messageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <motion.h1
        className="text-6xl font-bold text-main"
        key={countdown}
        variants={countdownVariants}
        initial="hidden"
        animate="visible"
      >
        {countdown}
      </motion.h1>
      <motion.p
        className="text-2xl"
        variants={messageVariants}
        initial="hidden"
        animate="visible"
      >
        Scared Potter?
      </motion.p>
    </div>
  );
}
