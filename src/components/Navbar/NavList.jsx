import React from 'react'
import { Link } from 'react-router-dom'

function NavList() {

    const NavItems = ["PLAYSTATION 6", "FEATURES", "GAMES", "ACCESSORIES", "CONTACT"]

  return (
    <ul className='flex flex-col space-y-10 lg:space-y-0 justify-evenly lg:flex-row lg:justify-between items-center lg:space-x-16 bg-transparent'>
        
        {NavItems.map((item, index) => (
            <li key={index}>
                <Link to={"#"} className='text-sm font-normal'>{item}</Link>
            </li>
        ))}


    </ul>
  )
}

export default NavList