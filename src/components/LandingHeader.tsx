import React from "react";
import itdatext from "../assets/main/itdatext.png";

const LandingHeader = () => {
  return (
    <div className="border-b w-full h-1/3 border-solid border-black">
      <div className="w-1/6 m-1/5 absolute left-3 top-3">
        <img src={itdatext} className="w-4/5 h-8"></img>
      </div>
    </div>
  );
};

export default LandingHeader;
