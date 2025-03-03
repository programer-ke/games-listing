import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { HiMoon } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(false);
  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(() => {
  },[])

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={60} height={60} />
      <div
        className="flex bg-slate-200 p-2 w-full items-center
      mx-5 rounded-full"
      >
        <FiSearch />
        <input
          type="text"
          className="px-2 bg-transparent outline-none"
          placeholder="Search..."
        />
      </div>
      <div>
        {theme== "light" ? (
          <HiMoon className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" 
          onClick={() => {setTheme("dark"); localStorage.setItem('theme','dark')}}
          />
        ) : (
          <MdSunny className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" 
          onClick={() => {setTheme("light"); localStorage.setItem('theme','light')}}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
