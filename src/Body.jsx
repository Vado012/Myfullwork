import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Body() {
  const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB"];

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[650px] relative  flex flex-col md:flex-row items-center md:items-stretch">
      <img src="gg.jpg" alt="" />
      
      {/* Left Section */}
      <div className="absolute flex">

        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-[80px] lg:px-[100px] py-10 text-center md:text-left space-y-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-white"
        >
          👋 Hello I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif text-blue-500 shadow shadow-amber-400"
        >
          Okamkpa Chinedu
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-gray-300"
        >
          A FullStack Website Designer
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white"
        >
          I'm a passionate full-stack developer who creates{" "}
          <span className="font-bold text-blue-500">EXTRAORDINARY</span> digital experiences
          that captivate users and drive business success.
          <br />
          With expertise in modern technologies and a revolutionary approach to
          problem-solving, I transform ideas into powerful, scalable solutions.
        </motion.p>

        {/* Skills Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto md:mx-0 p-6 bg-white rounded-xl shadow-md shadow-amber-500"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-700">
            My Skills
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-sm sm:text-base md:text-lg font-medium"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-green-500">✅</span> {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
      >
        <motion.img
          src="/me.jpg"
          alt="Okamkpa Chinedu"
          className="h-[280px] w-[220px] sm:h-[320px] sm:w-[260px] md:h-[380px] md:w-[320px] lg:h-[450px] lg:w-[380px] rounded-3xl object-cover shadow-lg border-4 border-white"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
      </motion.div>
      </div>
      
  

    </div>
  );
}

export default Body;




