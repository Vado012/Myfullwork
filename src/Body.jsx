import React from "react";
import { motion } from "framer-motion";

function Body() {
  const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Express.js", "MongoDB"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-[650px] flex flex-col md:flex-row items-center justify-between 
                 bg-[url('/gg.jpg')] bg-[#0008] bg-blend-darken bg-cover bg-center px-4 sm:px-8 md:px-16 lg:px-20 py-10 gap-10 md:gap-16"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white"
        >
          👋 Hello I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-lime-300 before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:border-t-4 before:border-t-white before:border-l-4 before:ml-[-20px] before:mt-[-10px] before:border-l-white after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:border-b-4 after:border-b-white after:border-r-4 after:mr-[-20px] after:mt-[30px] after:border-r-white pl-2.5"
        >
          Okamk<span className=" text-white">pa Ch</span>inedu
        </motion.h1>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="md:text-[1.2rem] text-white"
        >
          A FullStack web developer
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className=" leading-relaxed text-white"
        >
          I'm a passionate full-stack developer who creates{" "}
          <span className="font-bold text-lime-300">EXTRAORDINARY</span> digital experiences
          that captivate users and drive business success.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="w-full p-4 sm:p-6 bg-[#0006] rounded-xl border-2 border-lime-400"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center text-lime-400">
            My Skills
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer text-white text-sm sm:text-base md:text-lg"
              >
                <span className="text-green-500">✅</span> {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <motion.img
          src="/me.jpg"
          alt="Portrait of Okamkpa Chinedu"
          className="h-[220px] w-[180px] sm:h-[280px] sm:w-[220px] md:h-[380px] md:w-[320px] lg:h-[450px] lg:w-[380px] rounded-3xl object-cover shadow-lg border-2 border-lime-400"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
      </motion.div>
    </div>
  );
}

export default Body;





