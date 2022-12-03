import { EditIcon } from "../assets/icons";

const MyPage = () => {
  return (
    <div className="w-full mt-[50px] mb-[100px] flex justify-center">
      <div className="flex justify-center relative">
        <div className="flex flex-col">
          <img
            className="w-36 h-36 rounded-full mx-2"
            alt="profileimg"
            src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
          />
          <label className="flex justify-center items-center absolute w-14 h-14 rounded-full border right-[10px] bottom-0 sm:right-[70px]">
            {/* <input type="file" id="icon-button-file" ref="none" /> */}
            <EditIcon />
            <button aria-label="upload picture">Hi</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
