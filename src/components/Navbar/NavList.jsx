import React from 'react'
import { Link } from 'react-router-dom'

function NavList() {

    const NavItems = ["PLAYSTATION 6", "FEATURES", "GAMES", "ACCESSORIES", "CONTACT"]

  return (
    <ul className='flex justify-between items-center space-x-16'>
        
        {NavItems.map((item, index) => (
            <li key={index}>
                <Link to={"#"} className='text-sm font-normal'>{item}</Link>
            </li>
        ))}


    </ul>
  )
}

export default NavList