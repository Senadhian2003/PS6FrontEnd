import React from "react";
import Logo from "../../assets/images/Logo.svg";
import NavList from "./NavList";
import ActionButton from "../Buttons/ActionButton";
import PayIcon from "../../assets/icons/PayIcon.svg";
import DarkPayIcon from "../../assets/icons/DarkPayIcon.svg";

function Navbar() {
  return (
    <div className="relative flex justify-between items-center pt-4" style={{}}>
      {/* Logo */}
      <div>
        <img src={Logo} alt="PS 6 Logo" className="w-25 h-25" />
      </div>

      {/* NavList */}

      {/* <div className=''>

        </div> */}

      <NavList />

      {/* PreBook */}

      <ActionButton
        content={"Pre Book"}
        iconLight={PayIcon}
        iconDark={DarkPayIcon}
      />
      {/* 
        <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#3F4FB5] to-transparent"></div>
        </div>
      </div> */}

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3F4FB5] to-transparent  "></div>
    </div>
  );
}

export default Navbar;
