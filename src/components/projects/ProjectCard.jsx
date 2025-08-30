import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const ImageBlock = ({ src }) => (
  <div className="relative group w-1/2 h-full overflow-hidden transition-all duration-300 hover:rounded-[70px]">
    <img src={src} alt="" className="w-full h-full object-cover" />
    <div className="opacity-0 absolute group-hover:opacity-100 group-hover:bg-black/50 w-full h-full top-0 flex items-center justify-center text-white transition-all duration-300">
      <h2 className="text-[4vw] font-[lauseanne500] border-4 rounded-full w-fit px-7 pt-1">
        Vior Le Projects
      </h2>
    </div>
  </div>
);

const ProjectCard = ({ projectsCardArray }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".parent",
        start: "top 100%",
        end: "top -150%",
        markers: true,
        scrub: true,
      },
    })
  })

  return (
    <>
      <div className="-mt-20 parent">
        {projectsCardArray.map((projectCard, index) => (
          <div key={index} className="hero w-full flex gap-4 mb-4 h-[850px]">
            <ImageBlock src={projectCard.image1} />
            <ImageBlock src={projectCard.image2} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
