const ChatDetail = () => {
  return (
    <>
      <div>
        <div> icon </div>
        <div> 코딩하는 에어팟... </div>
        <div> menu icon </div>
      </div>

      <div>
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
    </>
  );
};

export default ChatDetail;
