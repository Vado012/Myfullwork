import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function SocialIcons() {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2, // delay each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="fixed right-6 bottom-20 flex flex-col gap-4 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="https://wa.me/2349037867037"
        target="_blank"
        rel="noopener noreferrer"
        className="text-5xl p-3 rounded-full bg-white text-green-600 hover:scale-125 transition-transform shadow-md"
        variants={itemVariants}
        whileHover={{ rotate: 15, scale: 1.2 }}
      >
        <FaWhatsapp />
      </motion.a>

      <motion.a
        href="https://x.com/vado_19?s=21"
        target="_blank"
        rel="noopener noreferrer"
        className="text-5xl p-3 rounded-full bg-black text-white hover:scale-125 transition-transform shadow-md"
        variants={itemVariants}
        whileHover={{ rotate: -15, scale: 1.2 }}
      >
        <FaXTwitter />
      </motion.a>

      <motion.a
        href="mailto:okamkpachinedu@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-5xl p-3 rounded-full bg-white text-red-500 hover:scale-125 transition-transform shadow-md"
        variants={itemVariants}
        whileHover={{ rotate: 10, scale: 1.2 }}
      >
        <MdOutlineEmail />
      </motion.a>

      <motion.a
        href="http://linkedin.com/in/okamkpa-chinedu-a41197385"
        target="_blank"
        rel="noopener noreferrer"
        className="text-5xl p-3 rounded-full bg-white text-blue-900 hover:scale-125 transition-transform shadow-md"
        variants={itemVariants}
        whileHover={{ rotate: -10, scale: 1.2 }}
      >
        <FaLinkedin />
      </motion.a>
    </motion.div>
  );
}

export default SocialIcons;