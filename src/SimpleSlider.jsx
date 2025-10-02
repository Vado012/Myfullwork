import React from "react";
import { motion } from "framer-motion";


function SimpleSlider() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="h-[700px] w-full relative overflow-hidden">
      {/* Video background */}
      <video
        src="jab.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-[700px] w-full object-cover"
      />
      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 md:bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      {/* Animated Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-blue-400 drop-shadow-lg"
          variants={textVariants}
          animate={{
            scale: [1, 1.05, 1], // subtle pulse
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Coding the Future
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium max-w-md md:max-w-2xl lg:max-w-3xl leading-relaxed drop-shadow-md"
          variants={textVariants}
        >
          Coding is more than just writing lines of text — it’s the art of
          turning ideas into reality. It empowers us to solve problems, build
          solutions, and create experiences that can change the world. With
          every function written and every bug fixed, we’re not just working
          with computers, we’re designing the future.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default SimpleSlider;


