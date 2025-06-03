import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const projectData = [
  {
    id: "machine1",
    img: "/img/shrederpng.png",
    title: "Shredder Machine",
    desc: "The Shredder Machine is a powerful device used to cut, tear, or grind materials like crop waste, plastic, or paper into smaller pieces for easy disposal, recycling, or composting.",
  },
  {
    id: "machine2",
    img: "/img/machinepng.png",
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
    img: "/img/machine2png.png",
    title: "Wood Chiper Machine",
    desc: "The Wood Chipper Diesel Version is a heavy-duty machine powered by a diesel engine, used to efficiently cut and shred tree branches and wood waste into chips.",
  },
  {
    id: "machine5",
    img: "/img/conyorpng.png",
    title: "Conveyor Machine",
    desc: "The Conveyor Machine is a mechanical system used to transport materials or goods automatically using belts, rollers, or chains.",
  },
  {
    id: "machine6",
    img: "/img/machine3png.png",
    title: "Briquetting Machine ",
    desc: "The Briquetting Machine compresses biomass waste like sawdust or crop residues into solid briquettes used as eco-friendly fuel.",
  },
  {
    id: "machine7",
    img: "/img/debeeler.jpg",
    title: "Debbler Machine",
    desc: "A debeler machine is used for processing agricultural or industrial materials by cutting, peeling, or separating parts efficiently.",
  },
  
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((proj) => proj.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="not-found">Project Not Found</div>;
  }

  const handleBack = () => {
    // Navigate back and request scroll to projects section
    navigate("/", { state: { scrollToProjects: true } });
  };

  return (
    <section className="project-details">
      <div className="project-content">
        <div className="project-image">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="project-text">
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
          <button onClick={handleBack} className="back-button">
            <img src="/img/back.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;


