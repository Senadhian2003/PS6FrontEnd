import React, { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import NavList from "./NavList";
import ActionButton from "../Buttons/ActionButton";
import PayIcon from "../../assets/icons/PayIcon.svg";
import DarkPayIcon from "../../assets/icons/DarkPayIcon.svg";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        className="relative z-50 flex justify-between items-center pt-4"
        style={{}}
      >
        {/* Logo */}
        <div>
          <img src={Logo} alt="PS 6 Logo" className=" min-w-20 min-h-20 " />
        </div>

        {/* NavList */}
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* PreBook */}
        <div className="hidden lg:block">
          <ActionButton
            content={"Pre Book"}
            iconLight={PayIcon}
            iconDark={DarkPayIcon}
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}{" "}
          {/* Toggle between icons */}
        </button>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lineGradient to-transparent  "></div>
      </div>

      <div
        className={`z-0  overflow-hidden shadow-xl bg-transparent transform transition-all duration-300 ease-in-out ${isOpen ? "py-8  h-full opacity-100  scale-100" : "h-0 opacity-0  scale-95 pointer-events-none"} lg:hidden`}
      >
        <NavList />
      </div>
    </div>
  );
}

export default Navbar;
