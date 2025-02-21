import React from 'react'
import FacebookCircled from "../../assets/images/FacebookCircled.svg"
import InstagramCircled from "../../assets/images/InstagramCircled.svg"
import XCircled from "../../assets/images/XCircled.svg"
import Youtube from "../../assets/images/Youtube.svg"


function FooterList({footerList, displaySocialMedia}) {
   
  return (
    <div>

        <h1 className='text-lg font-normal my-6'>{footerList.footerHeading}</h1>
        
     {
        displaySocialMedia ? <div className="flex justify-start space-x-2">

            <img src={FacebookCircled} alt="" />
            <img src={InstagramCircled} alt="" />
            <img src={XCircled} alt="" />
            <img src={Youtube} alt="" />

        </div> : ""
     }

        {
            footerList.footerItems.map((footerItem, index)=>{
 return <p key={index} className='text-sm font-normal'> {footerItem} </p>
            })
        }

        
        
    </div>
  )
}

export default FooterList