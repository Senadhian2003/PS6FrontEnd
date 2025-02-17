import React from 'react'

function CircularGamesComponent({imgSrc, altName}) {
  return (
    <div>
        <img src={imgSrc} alt={altName} className='hover:shadow-glowWhite rounded-full' />
    </div>
  )
}

export default CircularGamesComponent