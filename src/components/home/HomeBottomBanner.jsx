import { Link } from "react-router-dom";

const HomeBottomBanner = () => {
  return (
    <div className="font-[lauseanne500] uppercase text-[6.5vw] flex items-center justify-center gap-5 leading-[6.5vw] tracking-tighter">
        <Link to="/projects" className="border-2 px-12 pt-2 text-center border-white rounded-full hover:border-[#d3fd50] hover:text-[#d3fd50] hover:border-[#d3fd50]">Projects</Link>
        <Link to="/agence"   className="border-2 px-12 pt-2 text-center border-white rounded-full hover:border-[#d3fd50] hover:text-[#d3fd50] :border-[#d3fd50]">Agence</Link>
    </div>
  );
};

export default HomeBottomBanner;
