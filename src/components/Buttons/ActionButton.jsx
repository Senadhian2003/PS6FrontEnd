import React from 'react'
function ActionButton({ content, iconLight, iconDark }) {
    return (


        <div className="group flex relative max-w-md my-4">
        <div className="relative flex items-center">
         
          <button className="border border-white text-sm font-normal group-hover:text-black group-hover:bg-white hover:font-medium transition-all delay-30 duration-300 ease-in-out  pt-1 pb-2  pl-7 pr-20">
                   {content}
        </button>
        <div className="absolute right-5  ">
            {/* <Search size={20} /> */}
            <img src={iconLight} alt="" className='w-8 h-8 transition-opacity delay-30 duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-hover:hidden' />
         
            {/* <Search size={20} /> */}
            <img src={iconDark} alt="" className='w-8 h-8 hidden transition-opacity delay-30 duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:block ' />
          </div>
        
        </div>
        </div>





    )
}

export default ActionButton