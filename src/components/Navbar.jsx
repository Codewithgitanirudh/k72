import { useContext, useRef } from "react";
import { MenuState } from "../context/MenuContext";

const Navbar = () => {
  const menuRef = useRef(null);
  const [isMenuOpen, toggleMenu] = useContext(MenuState);  

  return (
    <div className="w-screen flex justify-between items-start fixed top-0 left-0 z-40">
      <div className="p-3 w-36">
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
        onMouseEnter={() => {
          menuRef.current.style.height = "100%";
        }}
        onMouseLeave={() => {
          menuRef.current.style.height = "0%";
        }}
        className="sticks h-12 w-[17vw] bg-black relative cursor-pointer overflow-hidden"
        onClick={() => toggleMenu()}
      >
        <div className="h-full w-full relative">
          <div className="absolute top-0 left-0 h-full w-full flex flex-col gap-1 px-12 justify-center items-end">
            <div className="stick w-18 h-0.5 "></div>
            <div className="stick w-10 h-0.5 "></div>
          </div>
        </div>
        <div
          ref={menuRef}
          className="absolute transition-all hover:bg-[#d3fd50] duration-200 h-full w-full top-0"
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
