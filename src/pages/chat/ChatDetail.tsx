const ChatDetail = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mt-4 flex justify-around box-content h-9 text-lg font-bold">
        <div> ᐸ </div>
        <div> 코딩하는 에어팟 팝니다... </div>
        <div> ☰ </div>
      </div>

      <div className="flex justify-start box-content text-lg font-bold">
        <img
          className="w-18 h-16 m-1 rounded-lg"
          alt="chatProfile"
          src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
        />
        <div>
          <p>잼민이</p>
          <p>100,000원</p>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
