import ApLogo from "/ap-logo.svg";

const Header = () => {
  return (
    <section className="bg-slate-700 shadow-md">
      <div className="flex justify-between w-350 mx-auto">
        <div className="flex items-center cursor-pointer sm:w-20 sm:h-20">
          <img src={ApLogo} alt="AP" className="pl-10" />
          <div className="text-lg font-semibold font-mono uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-400 ">
            thens
          </div>
        </div>
        <ul className="max-md:hidden max-lg:space-x-2 flex justify-center items-center space-x-5">
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
        {/* <div className="flex justify-items-center">
          <button className="text-white font-semibold rounded-full text-{16px} font-mono px-3 py-2 m-3 bg-slate-600 hover:bg-slate-400 cursor-pointer">
            Login
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Header;
