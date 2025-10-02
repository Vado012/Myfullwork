import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { a } from "framer-motion/client";

function Services() {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      
      title: "Full-Stack Development",
      desc: "Building scalable, high-performance web applications with cutting-edge technologies like React, Node.js, MongoDB, and cloud architectures.",
    },
    {
      title: "UI/UX Design",
      desc: "Creating stunning, intuitive user interfaces that provide exceptional user experiences and drive engagement through innovative design.",
    },
    {
      title: "Mobile Development",
      desc: "Developing cross-platform mobile applications that deliver native performance and seamless experiences across all devices.",
    },
    {
      title: "Performance Optimization",
      desc: "Optimizing applications for maximum speed, efficiency, and scalability using modern development practices.",
    },
  ];

  return (
    <div
      id="services"
      className="min-h-[650px] bg-gray-200 flex flex-col items-center py-12 px-6 bg-[url(code.jpg)] bg-no-repeat bg-cover"
    >
      
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Revolutionary Services
        </h1>
        <p className="text-lg md:text-2xl text-white mt-4">
          Transforming ideas into extraordinary digital experiences
        </p>
      </motion.div>

      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-[350px] w-[300px] bg-gray-300 shadow shadow-amber-500 rounded-2xl px-6 py-9 text-black shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <center><FaCode className="text-3xl" /></center><br />
            <h1 className="text-2xl font-bold text-center">{service.title}</h1>
            <p className="mt-6 text-[17px] text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;

