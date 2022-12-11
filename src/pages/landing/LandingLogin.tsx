import React from "react";
import { useNavigate } from "react-router-dom";
import { KakaoIcon } from "../../assets/icons";

const LandingLogin = () => {
  const navigate = useNavigate();

  const handleNonLoginMain = () => {
    navigate("/post");
  };

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/kakao/callback&response_type=code`;

  const onKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <div className="w-full h-full">
        <img src="images/image4.png" className=" w-full h-full"></img>
        <div className="absolute top-[5%] w-full h-[15rem] flex flex-col justify-center items-center">
          <span className=" font-extralight text-xl text-[#393939] tracking-wide">
            IT에 관한 모든 중고거래 플랫폼
          </span>
          <span className="font-bold text-6xl mr-[20px] mt-[25px] font-itda tracking-noraml">
            잇다
            <span className="font-bold text-4xl font-itda tracking-wide">
              {" "}
              에서
            </span>
          </span>
          <span className="font-bold text-4xl ml-[50px] mt-[10px] font-itda tracking-normal">
            <span className="text-[#ED2A70] font-itda tracking-wide">IT</span>
            거래하기
          </span>
        </div>
        <div className="absolute w-full h-[30%] top-[70%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center ">
          <div
            onClick={onKakaoLogin}
            className="h-[20%] w-[80%] bg-[#FBE950] mb-5 rounded-[15px] flex justify-center items-center cursor-pointer "
          >
            <KakaoIcon />
            <span className="font-bold text-lg mx-4 tracking-normal">
              카카오로 간편 로그인하기
            </span>
          </div>

          <span className="mb-[20px] text-[#888888] text-lg">
            가입전 서비스를 둘러보고 싶다면?
          </span>
          <div
            onClick={handleNonLoginMain}
            className="h-[20%] w-[80%] bg-[#ED2A70] rounded-[15px] flex justify-center items-center cursor-pointer "
          >
            <span className=" text-[#DDDBE9] font-bold text-2xl font-itda tracking-normal">
              잇다 둘러보기
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingLogin;
