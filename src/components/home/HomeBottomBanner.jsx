import React from "react";
import { Link } from "react-router-dom";

const HomeBottomBanner = () => {
  return (
    <div className="font-[lauseanne500] uppercase text-[6.5vw] flex items-center justify-center gap-2 leading-[6.5vw] tracking-tighter ">
        <Link to="/projects" className="border-2 px-8 pt-2 text-center border-white rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:border-yellow-400">Projects</Link>
        <Link to="/agence"   className="border-2 px-8 pt-2 text-center border-white rounded-full hover:border-yellow-400 hover:text-yellow-400 :border-yellow-400">Agence</Link>
    </div>
  );
};

export default HomeBottomBanner;
