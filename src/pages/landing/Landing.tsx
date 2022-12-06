import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "./Carousel";
import images from "../../data/landingImages";
import LandingHeader from "./LandingHeader";
import Arrow from "../../elements/Arrow";
import StartButton from "../../elements/StartButton";

const Landing = () => {
  const [num, setNum] = useState<number>(0);
  const navigate = useNavigate();
  const onMoveLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-full bg-[#dcdae8] relative">
      <LandingHeader num={num} setNum={setNum} />
      <Carousel images={images} num={num} setNum={setNum} />
      {num === 2 ? (
        <StartButton onClick={onMoveLoginPage} />
      ) : (
        <Arrow num={num} setNum={setNum}></Arrow>
      )}
    </div>
  );
};

export default Landing;
