import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const projectsCardArray = [
    {
      slug: "",
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      slug: "",
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
  ];

  return (
    <div className="p-4 uppercase">
      <div className="pt-[45vh]">
        <h2 className="text-[9.5vw] font-[lauseanne500]">Projects</h2>
      </div>
        <ProjectCard projectsCardArray={projectsCardArray} />
    </div>
  );
};

export default Projects;
