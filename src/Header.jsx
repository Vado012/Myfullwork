import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJetFighterUp } from "react-icons/fa6";

function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  
  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 15, staggerChildren: 0.15 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  
  const linkVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <header className="h-[60px] sticky relative top-0 z-50 bg-black/90 backdrop-blur-md text-white flex items-center justify-between px-9    shadow-md shadow-amber-500">
      
      
      <div>
        
        <FaJetFighterUp className="absolute left-4 top-5 text-3xl text-amber-500"/>
        <p className="text-2xl font-extrabold font-serif text-blue-700 shadow-md shadow-amber-500 px-4
        ">
        
          Okamkpa Chinedu
        </p>
        <p className="text-gray-300 text-xs sm:text-sm px-4">
          FullStack Website Designer
        </p>
      </div>

      
      <nav className="hidden md:flex gap-10 lg:gap-20">
        {navLinks.map((link, i) => (
          <a key={i} href={link.href} className="hover:text-blue-500 transition">
            {link.name}
          </a>
        ))}
      </nav>

      
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      
      <AnimatePresence>
        {open && (
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-screen w-[70%] sm:w-1/2 bg-black/95 backdrop-blur-md shadow-lg z-50 flex flex-col items-start px-6 py-16 gap-8"
          >
      
            <button
              className="absolute top-4 right-4"
              onClick={() => setOpen(false)}
            >
              <X size={28} />
            </button>

            
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-blue-500 text-lg"
                variants={linkVariants}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;



