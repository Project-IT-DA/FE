import React from "react";

interface Props {
  onClick(): void;
}

const StartButton = ({ onClick }: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className="absolute w-[80%] h-[7%] rounded-[50px] flex items-center justify-center bg-white/40 backdrop-blur-md top-[77%] shadow-lg translate-x-[-50%] left-[50%] cursor-pointer"
      >
        <span className="font-bold text-[#ED2A70] text-[1.5em] font-itda tracking-wide">
          바로 시작
        </span>
      </div>
    </>
  );
};

export default StartButton;
