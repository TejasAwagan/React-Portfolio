import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import {motion } from "framer-motion";

const iconDuration = (duration) => ({
  initial: { y: -20 },
  animate: {
    y: [10, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration:1.5, delay : 0.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5}}
        className="flex justify-center items-center flex-wrap gap-4"
      >
        <motion.div
          variants={iconDuration(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconDuration(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconDuration(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <SiExpress className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconDuration(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <SiMongodb className="text-7xl text-green-500 " />
        </motion.div>
        <motion.div
          variants={iconDuration(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <TbSql className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconDuration(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <IoLogoJavascript className="text-7xl text-yellow-200" />
        </motion.div>
        <motion.div
          variants={iconDuration(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <SiRedux className="text-7xl " />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
