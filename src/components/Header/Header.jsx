import React, { useEffect, useState } from "react";
import Logo from "../../image/Header/logo.png";
import "./Header.css";
export default function Header() {
  let [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  let [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleresize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, []);
  return (
    <header className="bg-white">
      <div className="flex justify-between h-[90px] items-center">
        <div>
       
          <img className=" w-[220px]" src={Logo} alt="" />
        </div>
        <nav className={`max-w-[620px] w-full flex ${burger ? "active" : ""} navbar`}>
          <ul className="text-[17px] w-full flex justify-between  gap-[3px] tracking-wider font-normal text-[#1B1A1A] items-center">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Get template</a>
            </li>
          </ul>
        </nav>
        {isMobile ? (
          <div
            className={`header__burger ${burger ? "active" : ""}`}
            onClick={() => setBurger(() => !burger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
