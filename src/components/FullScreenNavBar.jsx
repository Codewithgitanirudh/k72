import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";
import { MenuState } from "../context/MenuContext";

const FullScreenNavBar = () => {
  const fullNavRef = useRef(null);
  const fullScreenNavBarRef = useRef(null);
  const [isMenuOpen, toggleMenu] = useContext(MenuState);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
      delay: -0.5,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: -0.1,
      },
    });
    tl.to(".navlink", {
      delay: -1,
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (isMenuOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [isMenuOpen]
  );

  return (
    <div
      ref={fullScreenNavBarRef}
      className="fullscreennav h-screen w-full fixed top-0 left-0 z-50"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavRef} className="relative">
        <div className="navlink flex w-full justify-between p-5 items-start">
          <div className="p-3 w-36 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
              className="h-full w-full object-cover"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            className="h-32 w-32 relative cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="h-44 w-1 origin-top -rotate-45 absolute  bg-white hover:bg-[#d3fd50]"></div>
            <div className="h-44 w-1 absolute origin-top rotate-45 right-0 bg-white hover:bg-[#d3fd50]"></div>
          </div>
        </div>
        <div className="py-40">
          <div className="link origin-top cursor-pointer relative border-t-1 font-[lauseanne500] text-[8vw] uppercase border-y-1 text-white border-white">
            <h1 className="text-center leading-[0.8] pt-4">Projects</h1>
            <div className="moveLink absolute flex gap-4 top-0 text-black bg-[#d3fd50] transition-all duration-400">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
              <div className="moveX flex items-center gap-4 ml-80">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top cursor-pointer relative border-t-1 font-[lauseanne500] text-[8vw] uppercase border-y-1 text-white border-white">
            <h1 className="text-center leading-[0.8] pt-4">Projects</h1>
            <div className="moveLink absolute flex gap-4 top-0 text-black bg-[#d3fd50] transition-all duration-200">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
              <div className="moveX flex items-center gap-4 ml-80">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top cursor-pointer relative border-t-1 font-[lauseanne500] text-[8vw] uppercase border-y-1 text-white border-white">
            <h1 className="text-center leading-[0.8] pt-4">Projects</h1>
            <div className="moveLink absolute flex gap-4 top-0 text-black bg-[#d3fd50] transition-all duration-200">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
              <div className="moveX flex items-center gap-4 ml-80">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top cursor-pointer relative border-t-1 font-[lauseanne500] text-[8vw] uppercase border-y-1 text-white border-white">
            <h1 className="text-center leading-[0.8] pt-4">Projects</h1>
            <div className="moveLink absolute flex gap-4 top-0 text-black bg-[#d3fd50] transition-all duration-200">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
              <div className="moveX flex items-center gap-4 ml-80">
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover shrink-0 rounded-full"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.8] pt-4">
                  Pour tout voir
                </h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                  className="w-96 h-36 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNavBar;
