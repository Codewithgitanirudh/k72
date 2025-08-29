import React from "react";

const HomeTopBanner = () => {
  return (
    <div className="font-[lausanne300] pt-5 text-center">
      <div className="text-[9.5vw] uppercase mt-[-0.2em] pt-[0.2em] overflow-hidden leading-[8.7vw]">L'étincelle</div>
      <div className="text-[9.5vw] uppercase  flex justify-center items-center mt-[-0.2em] pt-[0.2em] overflow-hidden leading-[8.7vw]">
        qui
        <div className="h-[7vw] w-[16vw] -mt-4 overflow-hidden flex items-start rounded-full">
          <video src="../../../public/video/83c745cf.mp4" className="h-full w-full object-cover" muted loop autoPlay></video>
        </div>
        génère
      </div>
      <div className="text-[9.5vw] uppercase mt-[-0.2em] pt-[0.2em] overflow-hidden leading-[8.7vw]">
        la créativité
      </div>
    </div>
  );
};

export default HomeTopBanner;
