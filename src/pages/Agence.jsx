import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const imageArray = [
  "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
];

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const totalFrames = imageArray.length

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        scrub: true,
      },
      onUpdate: function () {
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.floor(this.progress() * totalFrames)
        );
        imageRef.current.src = imageArray[frameIndex];
      }
    });
  });



  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="h-[18.5vw] w-[15vw] absolute top-80 left-[30vw] overflow-hidden rounded-4xl"
        >
            <img
              src={imageArray[0]}
              ref={imageRef}
              alt=""
              className="h-full w-full object-cover"
            />
        </div>
        <div className="font-[lauseanne500] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Soixan7e Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-20">
            <p className="text-[4.5rem] indent-[5] leading-[1]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
