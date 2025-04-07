import ApLogo from "/ap-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <section className="bg-slate-700 shadow-md min-w-screen">
      <div className="flex justify-between md:ml-20 md:mr-10">
        <div className="flex items-center justify-center cursor-pointer">
          <img src={ApLogo} alt="AP" className="pl-10" />
          <div className="text-lg font-semibold font-mono uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-400 ">
            thens
          </div>
        </div>
        <ul className="hidden md:flex md:space-x-2 items-center space-x-5">
          <li className="text-xl text-slate-100 font-sans px-3 py-2 hover:font-semibold cursor-pointer">
            TV Shows
          </li>
          <li className="text-xl text-slate-100 font-sans px-3 py-2 hover:font-semibold cursor-pointer">
            Movies
          </li>
          <li className="text-xl text-slate-100 font-sans px-3 py-2 hover:font-semibold cursor-pointer">
            K-Drama
          </li>
          <li className="text-xl text-slate-100 font-sans px-3 py-2 hover:font-semibold cursor-pointer">
            Anime
          </li>
        </ul>
        <div className="md:hidden flex items-center justify-center pr-5 text-xl text-white">
          <GiHamburgerMenu />
        </div>
      </div>
    </section>
  );
};

export default Header;
