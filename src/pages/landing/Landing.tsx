import React, { useState } from "react";
import { Carousel } from "../../components/Carousel";
import images from "../../data/landingImages";
import LandingHeader from "../../components/LandingHeader";
import Arrow from "../../elements/Arrow";
import StartButton from "../../elements/StartButton";

const Landing = () => {
  const [num, setNum] = useState<number>(0);

  return (
    <div className="w-full h-full bg-[#dcdae8] relative">
      <LandingHeader num={num} setNum={setNum} />
      <Carousel images={images} num={num} setNum={setNum} />
      <Arrow num={num} setNum={setNum}></Arrow>
      {num === 2 ? <StartButton /> : null}
    </div>
  );
};

export default Landing;
