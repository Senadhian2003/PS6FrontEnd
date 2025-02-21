import React from "react";
function ActionButton({ content, iconLight, iconDark }) {
  return (
    <div className="group w-fit">
      <div className="  w-fit border border-white justify-start flex space-x-6 items-center pt-1 py-2 px-8 group-hover:text-black group-hover:bg-white hover:font-medium transition-all delay-30 duration-300 ease-in-out">
         {/* Invisible Clone to Maintain Size */}
   
    
        <button className="scale-95 group-hover:scale-105 transition-transform duration-300 ease-in-out  text-sm font-medium     ">
          {content}
        </button>
        <div className="scale-95 group-hover:scale-110 transition-transform duration-300 ease-in-out ">
       
          <img
            src={iconLight}
            alt=""
            className="min-w-6 min-h-6 transition-opacity delay-30 duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:hidden"
          />

        
          <img
            src={iconDark}
            alt=""
            className="min-w-6 min-h-6 hidden transition-opacity delay-30 duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:block "
          />
        </div>
      </div>
      </div>
  
  );
}

export default ActionButton;
