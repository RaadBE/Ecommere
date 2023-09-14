import img from '../img/55.jpg'
import img1 from '../img/32.jpeg'
import img2 from '../img/32.jpeg'
import React, { useState, useEffect } from 'react';

function MagicalFrame() {
  const pictures = [img, img1, img2];
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  useEffect(() => {
    // This sets up our timer to change the picture every second
    const timer = setInterval(() => {
      setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 4000);

    // This is a cleanup function. It makes sure we remove the timer if our frame (component) is taken down.
    return () => clearInterval(timer);
  }, [pictures.length]);

  return <img src={pictures[currentPictureIndex]} alt="Magical changing pic" />;
}

export default MagicalFrame;