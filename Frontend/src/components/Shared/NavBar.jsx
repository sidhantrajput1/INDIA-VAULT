import { useState } from "react";
import Logo from "./../../assets/img/Logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-between px-4 items-center md:flex-row flex-col md:mt-2 md:mb-1">
        {/* logo title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h2 className="text-base font-serif font-semibold ">India<span className="text-blue-500">Valut</span></h2>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* nav-items */}
        <div
          className={`nav-items md:flex ${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex-row gap-4 items-center mt-4 md:mt-0`}
        >
          <ul className="flex items-center gap-4 font-serif ">
            <a href="">
              <li>Home</li>
            </a>
            <a href=""><li>About</li></a>
            <a href=""><li>Service</li></a>
            <a href=""><li>List</li></a>
          </ul>
        </div>

        <div className="search-bar flex items-center justify-center rounded-full p-2 w-full md:w-80 gap-2 md:mt-0">
          {/* <button className="rounded-full border-none">🔍</button> */}
          <img className="h-6" src={Logo} alt="" />
          <input
            type="search"
            className="text-black flex-1 bg-gray-100 outline-none rounded-full p-2 text-sm font-serif"
            placeholder="Search here..."
          />
        </div>

        <div className="user-info flex gap-4 my-3 md:mt-0 font-serif">
          <button className="bg-cyan-400 py-1 px-4 rounded-lg ">Login</button>
          <button className="bg-sky-400 py-1 px-4 rounded-lg ">Sign-In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
