import React, { useState } from "react";
import { Carousel } from "../../components/Carousel";
import images from "../../data/landingImages";
import LandingHeader from "../../components/LandingHeader";
import arrow from "../../assets/icons/arrow.png";

const Landing = () => {
  const [num, setNum] = useState<number>(0);

  const handleNum = () => {
    num < 2 ? setNum(num => num + 1) : null;
  };

  return (
    <div className="w-full h-full bg-[#dcdae8] relative">
      <LandingHeader num={num} setNum={setNum} />
      <Carousel images={images} num={num} setNum={setNum} />
      <img
        src={arrow}
        className="absolute w-10 top-[50%] left-[85%] cursor-pointer"
        onClick={handleNum}
      ></img>
    </div>
  );
};

export default Landing;
