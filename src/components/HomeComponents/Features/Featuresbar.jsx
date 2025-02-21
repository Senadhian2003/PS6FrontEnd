import React, { useState } from 'react'

function Featuresbar({heading,content, image, index, changeFeatureContent}) {
  const [isOpen, setIsOpen] = useState(false)

  const openFeatureBarContent = ()=>{
    setIsOpen(true)
  }

  const closeFeatureBarContent = ()=>{
    setIsOpen(false)
  }

  return (
    <div onMouseEnter={openFeatureBarContent} onMouseLeave={closeFeatureBarContent}>
    <div
    className={` pl-4 py-2 sm:py-8 flex flex-wrap sm:flex-nowrap items-center sm:h-[80px]  w-${6-index}/6 border min-w-fit  border-darkBlue bg-gradient-to-r from-black via-20% via-lightBlue  via-darkBlue  to-black 
    shadow-defaultBlue transition-all duration-250  hover:shadow-glowBlue hover:scale-105
   `}

   onMouseEnter={changeFeatureContent}
  

  >
    <div className="flex-1 ">
    <img
  src={image}
  alt=""
  className="min-w-[135px] sm:min-w-[135px] h-[60px] w-full object-cover object-center"
/>
    </div>
    <p className="text-lg font-bayon font-normal whitespace-nowrap mt-4 sm:mt-0  text-end px-8">
      {heading}
     
    </p>
  </div>
  
  <div
        className={`z-0 sm:hidden  overflow-hidden shadow-xl bg-transparent transform transition-all duration-300 ease-in-out ${isOpen ? "py-8  h-full opacity-100  scale-100" : "h-0 opacity-0  scale-95 pointer-events-none"}`}
      >
         <p className="content">{content}</p>
      </div>


  </div>
  )
}

export default Featuresbar