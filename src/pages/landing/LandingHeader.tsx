import { Inum } from "../../types/numType";

const LandingHeader = ({ num, setNum }: Inum) => {
  const dotArray = [0, 1, 2];
  return (
    <div className="absolute z-10 w-full h-[35%] border-solid border-black flex justify-center flex-col items-center">
      <div className="text-[1.2em]">
        {num === 0
          ? "IT에 관한 모든 중고거래 플랫폼"
          : num === 1
          ? "IT에 관한 모든 이야기"
          : num === 2
          ? "IT에 관한 모든 이벤트"
          : null}
      </div>
      <div className="flex m-5 h-[25%] w-[100%] justify-center">
        <span className=" text-[3em] font-bold">잇다는</span>
        <span className="text-[3em] ml-5 text-[#ED2A70] font-bold">
          다-있다
        </span>
      </div>
      <div className="flex w-[80px] justify-around">
        {dotArray.map(dot => {
          return (
            <div
              className={`border-2 rounded-[50%] w-4 h-4 ${
                num === dot ? "bg-[#ED2A70]" : "bg-white"
              } cursor-pointer`}
              onClick={() => {
                setNum(dot);
              }}
              key={dot}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingHeader;
