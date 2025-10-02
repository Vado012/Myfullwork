import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function SocialIcons() {
  // Desktop (slide in from right)
  const desktopContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.2, type: "spring", stiffness: 50 },
    },
  };

  const desktopItemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  // Mobile (slide in from bottom)
  const mobileContainerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, type: "spring", stiffness: 50 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Desktop - vertical on right side */}
      <motion.div
        className="hidden md:flex fixed right-6 bottom-20 flex-col gap-4 z-50"
        variants={desktopContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://wa.me/2349037867037"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-3xl md:text-4xl p-4 rounded-full text-green-600 shadow-md bg-white"
          variants={desktopItemVariants}
          whileHover={{ rotate: 15, scale: 1.2 }}
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          href="https://x.com/vado_19?s=21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="text-3xl md:text-4xl p-4 rounded-full text-black shadow-md bg-white"
          variants={desktopItemVariants}
          whileHover={{ rotate: -15, scale: 1.2 }}
        >
          <FaXTwitter />
        </motion.a>

        <motion.a
          href="mailto:okamkpachinedu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="text-3xl md:text-4xl p-4 rounded-full text-red-500 shadow-md bg-white"
          variants={desktopItemVariants}
          whileHover={{ rotate: 10, scale: 1.2 }}
        >
          <MdOutlineEmail />
        </motion.a>

        <motion.a
          href="http://linkedin.com/in/okamkpa-chinedu-a41197385"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-3xl md:text-4xl p-4 rounded-full text-blue-900 shadow-md bg-white"
          variants={desktopItemVariants}
          whileHover={{ rotate: -10, scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      
      <motion.div
        className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center 
                   bg-black/80 py-3 z-50"
        variants={mobileContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="https://wa.me/2349037867037"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-2xl text-green-600"
          variants={mobileItemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          href="https://x.com/vado_19?s=21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="text-2xl text-white"
          variants={mobileItemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaXTwitter />
        </motion.a>

        <motion.a
          href="mailto:okamkpachinedu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="text-2xl text-red-500"
          variants={mobileItemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <MdOutlineEmail />
        </motion.a>

        <motion.a
          href="http://linkedin.com/in/okamkpa-chinedu-a41197385"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-2xl text-blue-500"
          variants={mobileItemVariants}
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>
    </>
  );
}

export default SocialIcons;

