import React from "react";

import SAstrobot from "../../assets/images/SAstrobot.svg";
import BAstrobot from "../../assets/images/BAstrobot1.svg";
import CircularGame1 from "../../assets/images/CircularAstrobot.svg";
import CircularGame2 from "../../assets/images/CircularLastOfUs.svg";
import CircularGame3 from "../../assets/images/CircularRatchet.svg";
import CircularGamesComponent from "./CircularGamesComponent";
import ActionButton from "../Buttons/ActionButton";
import GameControllerIcon from "../../assets/icons/GameControllerIcon.svg";
import DarkGameControllerIcon from "../../assets/icons/DarkGameControllerIcon.svg";

function GamesComponent() {
  return (
    <div className=" ">
      <div className=" flex justify-between">
        <div className="relative left-0 top-0">
          <img src={SAstrobot} alt="" className="object-contain" />
        </div>

        <div className=" pl-16 flex flex-col justify-center max-w-[600px]">
          <h1 className="heading">Play Your Way !</h1>
          <p className="content">
            Embark on Epic Adventures, Conquer New Worlds, and Redefine Your
            Gaming Journey with PS6 Exclusive Titles and Enhanced Classics
          </p>

            <div className="grid grid-cols-3 my-8 gap-y-8">

                <CircularGamesComponent imgSrc={CircularGame1} />
                <CircularGamesComponent imgSrc={CircularGame2} />
                <CircularGamesComponent imgSrc={CircularGame3} />

                <CircularGamesComponent imgSrc={CircularGame1} />
                <CircularGamesComponent imgSrc={CircularGame2} />
                <CircularGamesComponent imgSrc={CircularGame3} />
                


            </div>

            <ActionButton content={"GET GAME NOW"} iconLight={GameControllerIcon} iconDark={DarkGameControllerIcon} />


        </div>


       
        <div className="relative right-0 bottom-0 w-full h-full">
          <img src={BAstrobot} alt="Big Image" className=" h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default GamesComponent;
