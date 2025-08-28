import React from "react";

const HomeTopBanner = () => {
  return (
    <div className="font-[lausanne300] pt-5 text-center">
      <div className="text-[9.5vw] uppercase mt-[-0.2em] pt-[0.2em] overflow-hidden leading-[8.7vw]">L'étincelle</div>
      <div className="text-[9.5vw] uppercase  flex justify-center items-center mt-[-0.2em] pt-[0.2em] overflow-hidden leading-[8.7vw]">
        qui
        <div className="h-[7vw] w-[16vw] -mt-4 overflow-hidden flex items-start rounded-full">
          <video src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9" className="h-full w-full object-cover" muted loop autoPlay></video>
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
