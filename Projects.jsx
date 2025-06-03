// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// {
//   [
//     {
//       id: "shreddermachine",
//       img: "img/shrederpng.png",
//       title: "Shredder Machine",
//       desc: "Reduces waste material, paper, metal.",
//     },
//     {
//       id: "verticalringmachine",
//       img: "img/machinepng.png",
//       title: "Vertical Ring Machine",
//       desc: "Converts raw material like sawdust, straw.",
//     },
//     // Add other projects with unique `id`s
//   ].map((project, index) => (
//     <Link to={`/project/${project.id}`} key={index}>
//       <motion.div
//         className="project-card"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         whileHover={{ scale: 1.03 }}
//         viewport={{ once: true }}
//       >
//         <img src={project.img} alt={project.title} />
//         <div className="project-info">
//           <h3>{project.title}</h3>
//           <p>{project.desc}</p>
//         </div>
//       </motion.div>
//     </Link>
//   ));
// }

// export default function Projects() {
//   return (
//     <section className="projects-section">
//       <h2 className="animated-h1">Our Projects</h2>
//       <div className="projects-grid">
//         {[
//           {
//             img: "img/shrederpng.png",
//             alt: "Shredder Machine",
//             title: "Shredder Machine",
//             desc: "Reduces waste material:, paper, metal.",
//           },
//           {
//             img: "img/machinepng.png",
//             alt: "Pellet Machine",
//             title: "Vertical Ring Machine",
//             desc: "Converts raw material like sawdust, straw.",
//           },
//           {
//             img: "img/hydrapng.png",
//             alt: "Pellet Machine",
//             title: "Machine",
//             desc: "Converts raw material like sawdust, straw.",
//           },
//           {
//             img: "img/machine2png.png",
//             alt: "Pellet Machine",
//             title: "Machine",
//             desc: "Converts raw material like sawdust, straw.",
//           },
//           {
//             img: "img/conyorpng.png",
//             alt: "Pellet Machine",
//             title: " Machine",
//             desc: "Converts raw material like sawdust, straw.",
//           },
//           {
//             img: "img/machine3png.png",
//             alt: "Pellet Machine",
//             title: "Machine",
//             desc: "Converts raw material like sawdust, straw.",
//           },
//         ].map((project, index) => (
//           <motion.div
//             className="project-card"
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ scale: 1.03 }}
//             viewport={{ once: true }}
//           >
//             <img src={project.img} alt={project.alt} />
//             <div className="project-info">
//               <h3>{project.title}</h3>
//               <p>{project.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const projects = [
  {
    id: "machine1",
    img: "img/shrederpng.png",
    title: "Shredder Machine",
    desc: "The Shredder Machine is a powerful device used to cut, tear, or grind materials like crop waste, plastic, or paper into smaller pieces for easy disposal, recycling, or composting.",
  },
  {
    id: "machine2",
    img: "img/machinepng.png",
    title: "Vertical Ring Machine",
    desc: "The Vertical Ring Machine is an agricultural or industrial machine used for efficiently cutting, shaping, or compressing materials in a vertical circular motion.",
  },
  {
    id: "machine3",
    img: "/img/IMG-20250601-WA0056.jpg",
    title: "Hydra Machine",
    desc: "The Tactor Hydra Machine is a tractor-operated hydraulic farming tool used for plowing, lifting, sowing, and other agricultural tasks efficiently with interchangeable attachments.",
  },
  {
    id: "machine4",
    img: "img/machine2png.png",
    title: "Wood Chiper Machine",
    desc: "The Wood Chipper Diesel Version is a heavy-duty machine powered by a diesel engine, used to efficiently cut and shred tree branches and wood waste into chips.",
  },
  {
    id: "machine5",
    img: "img/conyorpng.png",
    title: "Conveyor Machine",
    desc: "The Conveyor Machine is a mechanical system used to transport materials or goods automatically using belts, rollers, or chains.",
  },
  {
    id: "machine6",
    img: "img/machine3png.png",
    title: "Briquetting Machine ",
    desc: "The Briquetting Machine compresses biomass waste like sawdust or crop residues into solid briquettes used as eco-friendly fuel.",
  },
  {
    id: "machine7",
    img: "img/debeeler.jpg",
    title: "Debbler Machine",
    desc: "A debeler machine is used for processing agricultural or industrial materials by cutting, peeling, or separating parts efficiently.",
  },
];

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const section = document.getElementById("projects-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="projects-section" className="projects-section">
      <h2 className="animated-h1">Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
