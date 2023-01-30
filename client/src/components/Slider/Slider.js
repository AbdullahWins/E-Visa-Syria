import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // const id = setInterval(() => {
    //   setCurrentIndex((currentIndex + 1));
    // }, 4000);
    // setIntervalId(id);
    // return () => clearInterval(intervalId);

    if (currentIndex < images.length) {
      setInterval(() => {
        setCurrentIndex(currentIndex + 1);
      }, 5000);
    } else {
      setCurrentIndex(0);
    }
  }, [currentIndex, images.length]);

  return (
    <div>
      <img src={images[currentIndex]} alt="" />
    </div>
  );
};

export default Slider;
