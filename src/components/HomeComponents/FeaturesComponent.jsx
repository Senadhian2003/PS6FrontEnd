import React from "react";
import PS6Image from "../../assets/images/PS6.svg";
import ActionButton from "../Buttons/ActionButton";
import MoreFeaturesIcon from "../../assets/icons/MoreFeaturesIcon.svg";
import DarkMoreFeaturesIcon from "../../assets/icons/DarkMoreFeaturesIcon.svg";
import PS6Buds from "../../assets/images/PS6Buds.svg";
import Feature1 from "../../assets/images/Feature1.svg";
import Feature2 from "../../assets/images/Feature2.svg";
import Feature3 from "../../assets/images/Feature3.svg";
import Feature4 from "../../assets/images/Feature4.svg";
import Feature5 from "../../assets/images/Feature5.svg";
import FeaturesTemplate from "../../assets/images/FeaturesTemplate2.svg";

function FeaturesComponent() {
  return (
    <div className=" bg-black my-24">
      <h1 className="title text-center my-12">Revolutionary Features </h1>

      {/* Features */}

      <div className="flex">
        <div className="features basis-2/3 flex flex-col justify-evenly space-y-10 ">
        <div
            className="feature1 pl-4 flex items-center h-[101px]  w-full border  border-darkBlue bg-gradient-to-r from-black via-20% via-lightBlue  via-darkBlue  to-black 
           shadow-defaultBlue transition-all duration-250  hover:shadow-glowBlue hover:scale-105
          "
          >
            <div className="flex-1 w-full">
              <img
                src={Feature1}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-lg font-bayon font-normal whitespace-nowrap  text-end px-8">
              {" "}
              8K Ultra HD Graphics
            </p>
          </div>

          <div
            className="feature1 pl-4 flex items-center h-[101px]  w-5/6 border  border-darkBlue bg-gradient-to-r from-black via-20% via-lightBlue  via-darkBlue  to-black 
            shadow-defaultBlue transition-all duration-250  hover:shadow-glowBlue hover:scale-105
           "
          >
            <div className="flex-1 ">
              <img
                src={Feature2}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-lg font-bayon font-normal whitespace-nowrap  text-end px-8">
              {" "}
              Next-Gen Ray Tracing
            </p>
          </div>

          <div
           className="feature1 pl-4 flex items-center h-[101px]  w-4/6 border  border-darkBlue bg-gradient-to-r from-black via-20% via-lightBlue  via-darkBlue  to-black 
           shadow-defaultBlue transition-all duration-250  hover:shadow-glowBlue hover:scale-105
          "
          >
            <div className="flex-1 ">
              <img
                src={Feature3}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-lg font-bayon font-normal whitespace-nowrap  text-end px-8">
              {" "}
              AI-Powered Gameplay
            </p>
          </div>

          <div
          className="feature1 pl-4 flex items-center h-[101px]  w-3/6 border  border-darkBlue bg-gradient-to-r from-black via-20% via-lightBlue  via-darkBlue  to-black 
          shadow-defaultBlue transition-all duration-250  hover:shadow-glowBlue hover:scale-105
         "
          >
            <div className="flex-1 ">
              <img
                src={Feature4}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-lg font-bayon font-normal whitespace-nowrap  text-end px-8">
              {" "}
              DualSense 2 Control
            </p>
          </div>

          <div
            className="feature1 pl-4 flex items-center h-[101px]  w-2/6 border  border-darkBlue bg-gradient-to-r from-black via-20% via-lightBlue  via-darkBlue  to-black 
            shadow-defaultBlue transition-all duration-250  hover:shadow-glowBlue hover:scale-105
           "
          >
            <div className="flex-1 ">
              <img
                src={Feature5}
                alt=""
                className="h-full w-full object-cover"
                
              />
            </div>
            <p className="text-lg font-bayon font-normal whitespace-nowrap  text-end px-8">
              {" "}
              SSD 3.0 Speed
            </p>
          </div>
          </div>

        <div className="content relative  basis-1/3   flex flex-col justify-end  ">
          <div className="p-4 relative right-32">
            <p className="heading">What sets us apart !</p>

            <p className="content">
              Discover the groundbreaking features that make the PlayStation 6
              the ultimate gaming console. From stunning 8K visuals to
              intelligent AI-driven gameplay, every element is designed to
              immerse you in a world of unparalleled realism and performance.
            </p>

            <div className="mt-8">
              <ActionButton
                content={"MORE FEATURES"}
                iconLight={MoreFeaturesIcon}
                iconDark={DarkMoreFeaturesIcon}
              />
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <img src={PS6Buds} alt="" className="w-44 h-44" />
          </div>
          {/* <div className="absolute bottom-0 -right-12">
            <img src={FeaturesTemplate} alt="" className="w-44 h-44" />
          </div> */}

<div className="absolute -bottom-32  -right-12  ">
  <img 
    src={FeaturesTemplate} 
    alt="Features" 
    className="w-full h-full object-cover  scale-75"
  />
</div>



        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;
