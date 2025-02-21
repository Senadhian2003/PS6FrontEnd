import React, { useEffect, useState } from "react";


import CircularGamesComponent from "./CircularGamesComponent";
import ActionButton from "../../Buttons/ActionButton";
import GameControllerIcon from "../../../assets/icons/GameControllerIcon.svg";
import DarkGameControllerIcon from "../../../assets/icons/DarkGameControllerIcon.svg";
import gamesData from "../../../data/gamesData";

function GamesComponent() {

  const [imageState, setImageState] = useState(gamesData[0])
  const [currentImage, setCurrentImage] = useState(gamesData[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
   
   
    setAnimate(true);

   

    const resetTimeout = setTimeout(() => setAnimate(false), 600); 

    const timeout = setTimeout(() => {
      setCurrentImage({...currentImage, smallImage : imageState.smallImage, bigImage : imageState.bigImage});
    }, 300);
    return () => {
      clearTimeout(timeout);
      clearTimeout(resetTimeout);
    };

   
  }, [imageState]); // Run effect when image changes


  const changeImageState = (imageObj)=>{

    if(imageObj.smallImage!= imageState.smallImage ){
      setImageState({...imageState, smallImage : imageObj.smallImage, bigImage : imageObj.bigImage})
    }

    

  }


  return (
    <div className=" max-h-screen my-40">
      <div className=" flex justify-between">
        <div className="relative min-h-[500px] min-w-dvh left-0 top-0">
          <img  key={currentImage.smallImage} // Important for React to recognize the change
     src={currentImage.smallImage}
     alt=""
     className={`w-full h-full object-left-top object-contain transition-all duration-300 ease-in-out transform ${
       animate ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"
     }`}/>
                                                          
        </div>

        <div className=" pl-16 flex flex-col justify-center max-w-[600px]">
          <h1 className="heading">Play Your Way !</h1>
          <p className="content">
            Embark on Epic Adventures, Conquer New Worlds, and Redefine Your
            Gaming Journey with PS6 Exclusive Titles and Enhanced Classics
          </p>

            <div className="grid grid-cols-3 my-8 gap-y-12 gap-x-8">

                {gamesData.map((item,index)=>{
                  return   <CircularGamesComponent key={index} imgSrc={item.circularImage} changeImageState={()=>changeImageState(item)} />
                })
                }
                


            </div>
            <div className="mt-8">
            <ActionButton content={"GET GAME NOW"} iconLight={GameControllerIcon} iconDark={DarkGameControllerIcon} />

            </div>
           

        </div>


       
        <div className="relative min-h-[100px] min-w-dvh right-0 bottom-0 ">
          <img src={currentImage.bigImage} alt="Big Image" className= {`w-full h-full object-right-bottom transition-all duration-300 ease-in-out transform object-contain ${
       animate ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"
     }`} />
        </div>
      </div>
    </div>
  );
}

export default GamesComponent;
