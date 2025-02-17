import React from "react";
import Navbar from "../Navbar/Navbar";
import LandingScreen from "../HomeComponents/LandingScreen";
import landingBackground from "../../assets/images/backgroundImage.svg";
import ControllerComponent from "../HomeComponents/ControllerComponent";
import FeaturesComponent from "../HomeComponents/FeaturesComponent";
import GamesComponent from "../HomeComponents/GamesComponent";
import Footer from "../HomeComponents/Footer/Footer";

function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <div
        className="h-screen flex flex-col bg-cover bg-center px-28"
        style={{ backgroundImage: `url(${landingBackground})` }}
      >
        {/* <img
          src={landingBackground}
          alt="SVG Background"
          className="invisible md:visible absolute w-full h-full object-contain -z-10"
        /> */}

        <Navbar />
        <LandingScreen />
      </div>

      <ControllerComponent />

      <FeaturesComponent/>

      <GamesComponent/>

      <Footer/>

    </div>
  );
}

export default Home;
