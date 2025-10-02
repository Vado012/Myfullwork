import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        
        <div>
          <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-white">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-4 mt-3 text-xl">
            
            <a href="https://x.com/vado_19?s=21" className="hover:text-white"><FaXTwitter /></a>
            <a href="http://linkedin.com/in/okamkpa-chinedu-a41197385" className="hover:text-white"><FaLinkedin /></a>
            <a href="mailto:okamkpachinedu@gmail.com" className="hover:text-white">  <MdOutlineEmail /></a>
            <a href="https://wa.me/2349037867037" className="hover:text-white"><FaWhatsapp/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
