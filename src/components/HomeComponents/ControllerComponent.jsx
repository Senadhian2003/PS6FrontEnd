import React, { useState } from "react";
import Controller1Image from "../../assets/images/Controller1.svg";
import Controller2Image from "../../assets/images/Controller2.svg";
import Controller3Image from "../../assets/images/Controller3.svg";

function ControllerComponent() {
  const controllers = ["controller1", "controller2", "controller3"];
  const [highlightController, setHighlightController] = useState(
    controllers[1]
  );

  const onHoverImage = (controllerName) => {
    setHighlightController(controllerName);
  };

  const onExitImage = () => {
    setHighlightController(controllers[1]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center space-y-4  text-center p-4">
      <p className="title mt-12 sm:mt-0">
        DualSense 2 Controller
        <br />
        The Ultimate Gaming Companion
      </p>

      <p className="text-lg font-normal ">
        Feel Every Moment, Control Every Move
      </p>

      <div className="relative flex justify-center -space-x-16 sm:-space-x-56 items-center top-12">
        {/* Left Image */}
        <div
          className={`relative max-w-lg max-h-lg  transition-transform transition-opacity duration-500 ease-out ${
            highlightController === controllers[0]
              ? "scale-110 z-40 opacity-100"
              : "scale-75 z-0 opacity-70"
          }`}
          onMouseEnter={() => onHoverImage(controllers[0])}
          onMouseLeave={() => onExitImage()}
        >
          <img
            src={Controller1Image}
            alt="Left"
            className=" object-contain"
          />
        </div>

        {/* Center Image - Main Focus */}
        <div
          className={`relative max-w-lg max-h-lg transition-transform transition-opacity duration-500 ease-out ${
            highlightController === controllers[1]
              ? "scale-110 z-40 opacity-100"
              : "scale-75 z-20 opacity-70"
          }`}
          onMouseEnter={() => onHoverImage(controllers[1])}
          onMouseLeave={() => onExitImage()}
        >
          <img
            src={Controller2Image}
            alt="Center"
            className=" object-contain"
          />
        </div>

        {/* Right Image */}
        <div
          className={`relative max-w-lg max-h-lg  transition-transform transition-opacity duration-500 ease-out ${
            highlightController === controllers[2]
              ? "scale-110 z-40 opacity-100"
              : "scale-75 z-0 opacity-70"
          }`}
          onMouseEnter={() => onHoverImage(controllers[2])}
          onMouseLeave={() => onExitImage()}
        >
          <img
            src={Controller3Image}
            alt="Right"
            className=" object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ControllerComponent;
