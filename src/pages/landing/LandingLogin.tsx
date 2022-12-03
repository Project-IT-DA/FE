import React from "react";
import { useNavigate } from "react-router-dom";

const LandingLogin = () => {
  const navigate = useNavigate();
  const handleNonLoginMain = () => {
    navigate("/post");
  };

  return (
    <>
      <div className="w-full h-full">
        <img src="images/image4.png" className=" w-full h-full"></img>
        <div className="absolute w-full h-[100px] top-[80%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center ">
          <span className="mb-[20px] text-[#888888] text-lg">
            가입전 서비스를 둘러보고 싶다면?
          </span>
          <div
            onClick={handleNonLoginMain}
            className="h-[60px] w-[80%] bg-[#ED2A70] rounded-[20px] flex justify-center items-center"
          >
            <span className=" text-[#DDDBE9] font-bold text-2xl">
              잇다 둘러보기
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingLogin;
