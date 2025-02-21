import React from 'react'

import { motion } from "framer-motion";

function CircularGamesComponent({ imgSrc, altName, changeImageState }) {
  return (
    <motion.img
      onMouseEnter={changeImageState}
      src={imgSrc}
      alt={altName}
      className="hover:shadow-glowWhite rounded-full"
      whileHover={{ scale: 1.05 }}
    />
  );
}

export default CircularGamesComponent;
