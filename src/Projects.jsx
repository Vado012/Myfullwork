import React from "react";

function Projects() {
  const projects = [
    {
      title: "🧪 Project: AcconLabEquipments — E-Commerce Platform",
      writeUp:
        "AcconLab Equipments is a modern e-commerce web app designed for purchasing laboratory, hospital, and physics equipment. It offers a clean and intuitive interface where users can explore a wide range of scientific tools, add items to their cart, and securely place orders. Built with a focus on efficiency and reliability, the platform streamlines the process of finding and ordering quality lab equipment, making it easier for institutions, professionals, and students to get what they need in just a few clicks.",
      image: "accon.png",
      link: "https://www.acconlabscientific.com/",
    },
    {
      title: "🌍 Project: Henley & Harris Foundation — NGO Website",
      writeUp:
        "The Henley & Harris Foundation website was built to highlight the organization’s mission of empowering communities through education, healthcare, and social development. The site features a clean, responsive design that tells the foundation’s story, showcases its ongoing projects, and makes it easy for visitors to get involved through donations or volunteer programs. It’s focused on clarity, accessibility, and impact — helping the foundation connect with supporters and share its vision for positive change.",
      image: "henley.png",
      link: "https://www.henleyandharrisfoundation.com/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
        Featured Projects
      </h2>
    
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full text-gray-700">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {project.title}
              </h3>
              <p className="leading-relaxed mb-5">{project.writeUp}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
