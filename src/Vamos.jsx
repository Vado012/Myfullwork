import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactItems = [
  {
    icon: <FaWhatsapp className="text-green-500 text-4xl" />,
    title: "Chat with me",
    link: "https://wa.me/2349037867037",
    subtitle: "Available on WhatsApp",
  },
  {
    icon: <IoCall className="text-blue-500 text-4xl" />,
    title: "+234 903 786 7037",
    link: "tel:+2349037867037",
    subtitle: "Click to call",
  },
  {
    icon: <MdOutlineEmail className="text-red-500 text-4xl" />,
    title: "okamkpachinedu@gmail.com",
    link: "mailto:okamkpachinedu@gmail.com",
    subtitle: "Send me an email",
  },
  {
    icon: <FaLocationDot className="text-orange-500 text-4xl" />,
    title: "Lagos, Nigeria",
    link: "#",
    subtitle: "My current location",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },   
  visible: { opacity: 1, y: 0 },   
};

function Vamos() {
  return (
    <div id="contact" className="min-h-[500px] py-10 px-4 bg-gray-50 ">
        <center><h1 className="text-5xl font-extrabold">Contact Me</h1></center><br />
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // animate only once when 20% visible
        transition={{ staggerChildren: 0.2 }} // delay between cards
      >
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm shadow-black p-6 hover:scale-105 transition-transform text-center"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {item.icon}
            <h1 className="mt-3 font-bold text-lg">{item.title}</h1>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Vamos;


