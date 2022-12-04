import { EditIcon } from "../assets/icons";

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log("프로필사진변경");
};

const MyPage = () => {
  return (
    <>
      <div className="w-full mt-[50px] flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center relative">
            <img
              className="w-36 h-36 rounded-full mx-2"
              alt="profileimg"
              src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
            />
            <label
              className="flex justify-center items-center absolute w-14 h-14 rounded-full right-[2px] bottom-0"
              htmlFor="icon-button-file"
            >
              <input
                type="file"
                id="icon-button-file"
                className="hidden"
                // ref="none"
                onChange={onChange}
              />
              <EditIcon aria-label="upload picture" />
            </label>
          </div>
          <div className="mt-[10px] justify-center w-full flex-col flex relative">
            <div className="font-bold justify-items-center">
              <span className="text-3xl">잇다가 좋아</span>
              <span className="text-2xl ml-2 justify-end">님</span>
            </div>
            <div className="font-bold text-lg justify-center">
              <span className="ml-8">잇다 농도: </span>
              <span className="text-[#ED2A70]">38</span>
              <span className="font-bold">%</span>
            </div>
            <button className="bg-[#ED2A70] text-white h-13 p-2.5 mt-[5px] rounded-lg text-base font-semibold">
              프로필수정
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-[15px] flex justify-center">
        <hr className="bg-[#949494] w-11/12"></hr>
      </div>
    </>
  );
};

export default MyPage;
