import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div
      id="about"
      className="min-h-[500px] bg-gradient-to-r relative from-black via-gray-600 to-amber-500 bg-[length:200%_200%] flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-white"
    >
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl md:max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Hi 👋, I’m a passionate developer who loves turning ideas into
        interactive digital experiences. From building responsive websites to
        creating powerful applications, I enjoy exploring new technologies and
        solving problems through code.
        <br />
        <br />
        When I’m not coding, I’m learning, experimenting, and pushing myself to
        grow as a developer. My mission is to design and build solutions that
        don’t just work — they inspire, engage, and make a difference.
        
        
      </motion.p>
    </div>
  );
}

export default About;

