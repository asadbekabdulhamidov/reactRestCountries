// react icons
import { FaSun, FaMoon } from "react-icons/fa";

//react imports
import { useState, useEffect } from "react";
//react router dom
import { Link } from "react-router-dom";

function Navbar() {
  // LocalStorage'dan oldingi holatni olish
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Dark Mode o'zgarishlarini kuzatish
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <header className="py-6 bg-white shadow-xl dark:bg-[#2b3844]">
      <nav className="align-elements flex justify-between items-center ">
        <Link to="/" className="font-bold dark:text-white  md:text-2xl">
          Where in the world?
        </Link>
        <div className="flex gap-2 items-center">
          {!darkMode && <FaMoon className="h-5 w-5 " />}
          {darkMode && <FaSun className="h-5 w-5 dark:text-white" />}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="font-mono md:font-medium dark:text-white"
          >
            {darkMode ? "Light " : "Dark "} Mode
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
