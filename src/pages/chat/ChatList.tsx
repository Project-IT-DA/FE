import { Link } from "react-router-dom";

Link;
const ChatList = () => {
  return (
    <>
      <div className="h-full overflow-y-scroll pb-[3rem]">
        <Link to={`/chat/1`}>
          <div className="m-5 p-1.5 border-2 rounded-lg flex">
            <img
              className="w-16 h-16 m-1 rounded-lg"
              alt="chatProfile"
              src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
            />
            <div className="ml-3 m-1">
              <p className="text-lg font-bold">갓현 (3달전)</p>
              <p className="mt-1 text-base">이 물품 가격이 얼마인가요?? ...</p>
            </div>
          </div>
        </Link>

        <div className="m-5 p-1.5 border-2 rounded-lg flex bg-[#CDCDCD]">
          <img
            className="w-16 h-16 m-1 rounded-lg"
            alt="chatProfile"
            src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
          />
          <div className="ml-3 m-1">
            <p className="text-lg font-bold">잼민이 (3달전)</p>
            <p className="mt-1 text-base">이 물품 가격이 얼마인가요?? ...</p>
          </div>
        </div>

        <div className="m-5 p-1.5 border-2 rounded-lg flex">
          <img
            className="w-16 h-16 m-1 rounded-lg"
            alt="chatProfile"
            src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
          />
          <div className="ml-3 m-1">
            <p className="text-lg font-bold">잼민이 (3달전)</p>
            <p className="mt-1 text-base">이 물품 가격이 얼마인가요?? ...</p>
          </div>
        </div>

        <div className="m-5 p-1.5 border-2 rounded-lg flex">
          <img
            className="w-16 h-16 m-1 rounded-lg"
            alt="chatProfile"
            src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
          />
          <div className="ml-3 m-1">
            <p className="text-lg font-bold">잼민이 (3달전)</p>
            <p className="mt-1 text-base">이 물품 가격이 얼마인가요?? ...</p>
          </div>
        </div>

        <div className="m-5 p-1.5 border-2 rounded-lg flex">
          <img
            className="w-16 h-16 m-1 rounded-lg"
            alt="chatProfile"
            src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
          />
          <div className="ml-3 m-1">
            <p className="text-lg font-bold">잼민이 (3달전)</p>
            <p className="mt-1 text-base">이 물품 가격이 얼마인가요?? ...</p>
          </div>
        </div>

        <div className="m-5 p-1.5 border-2 rounded-lg flex">
          <img
            className="w-16 h-16 m-1 rounded-lg"
            alt="chatProfile"
            src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
          />
          <div className="ml-3 m-1">
            <p className="text-lg font-bold">잼민이 (3달전)</p>
            <p className="mt-1 text-base">이 물품 가격이 얼마인가요?? ...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatList;
