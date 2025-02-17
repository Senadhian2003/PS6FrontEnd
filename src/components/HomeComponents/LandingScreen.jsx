import React from 'react'
import ActionButton from '../Buttons/ActionButton'
import PayIcon from "../../assets/icons/PayIcon.svg";
import DarkPayIcon from "../../assets/icons/DarkPayIcon.svg";
import GlassesIcon from "../../assets/icons/GlassesIcon.svg"
import DarkGlassesIcon from "../../assets/icons/DarkGlassesIcon.svg"
import PS6Image from "../../assets/images/PS6.svg"
function LandingScreen() {
  return (
    <div className='flex-1 flex flex-col justify-center text-justify'>
    

      <div className="flex justify-between">

        <div className='max-w-[640px] flex flex-col justify-center'>

          <h1 className='my-4 text-lg font-normal relative after:content-[""] after:block after:w-3/12 after:pt-[3px] after:border-b-2 after:border-white'>The Future of Gaming Is Here</h1>
          <p className='title font-bayon my-4 '>Introducing PlayStation 6 with Power and Precision</p>
          <p className='content my-4'>A New Era of Gaming Begins, Where Every Moment Feels More Real, Every Action More Precise, and Every Experience More Immersive Than Ever Before, Redefining What's Possible in the World of Play.</p>
          
          <div className="flex justify-between items-center mt-8">

            <ActionButton content={"PRE BOOK"} iconLight={PayIcon} iconDark={DarkPayIcon} />
            <ActionButton content={"WATCH THE REVEAL"} iconLight={GlassesIcon} iconDark={DarkGlassesIcon} />

          </div>

        </div>


        <div className='flex flex-col justify-end' >

<img src={PS6Image} alt=""  width={"550px"} height={"550px"} />

        </div>
        

      </div>




    </div>
  )
}

export default LandingScreen