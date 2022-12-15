const ChatDetail = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col justify-center overflow-y-scroll pb-[3rem]">
      {/* 헤딩 */}
      <div className="pt-4 px-4	flex justify-between box-content h-9 text-lg font-bold border-y-2">
        <div className="cursor-pointer" onClick={handleBackClick}>
          {" "}
          ᐸ 갓현{" "}
        </div>
        <div> ☰ </div>
      </div>
      {/* 판매물품정보 */}
      <div className="m-5 p-1.5 border-2 rounded-lg flex">
        <img
          className="w-16 h-16 m-1 rounded-lg"
          alt="item"
          src={`https://picsum.photos/480/200`}
        />
        <div className="ml-3 m-1 font-bold text-lg">
          <p className="mt-1">코딩하는 에어팟 팝니다</p>
          <p className="mt-1 text-[#ED2A70]">
            100,000 <span className="text-[#000000]">원</span>
          </p>
        </div>
      </div>
      {/* 날짜표시 */}
      <div className="flex justify-center box-content justify-items-center">
        <div className="w-32 h-8 leading-8 rounded-lg bg-[#D9D9D9] text-[#494949] text-xs flex justify-center">
          2022년 12월 10일
        </div>
      </div>
      {/* 상대방 글 */}
      <div className="flex ml-6 mt-3">
        <div className="w-9 h-9">
          <img
            src={`https://picsum.photos/480/200`}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex">
          <div className="border-[1.5px] ml-2 border-black px-4 py-2 rounded-lg rounded-tl-none max-w-[250px]">
            <p className="break-all text-base leading-5">
              안녕하세요? 물건 팔렸나여?
            </p>
          </div>
          <div className="ml-2 relative">
            <p className="text-[10px] text-[#494949] w-12 absolute bottom-0">
              오후 8:54
            </p>
          </div>
        </div>
      </div>
      {/* 상대방 글2 */}
      <div className="flex ml-6 mt-3">
        <div className="w-9 h-9"></div>
        <div className="flex">
          <div className="border-[1.5px] ml-2 border-black px-4 py-2 rounded-lg rounded-tl-none max-w-[250px]">
            <p className="break-all text-base leading-5">
              안팔렸다면 사고 싶습니다!
            </p>
          </div>
          <div className="ml-2 relative">
            <p className="text-[10px] text-[#494949] w-12 absolute bottom-0">
              오후 8:54
            </p>
          </div>
        </div>
      </div>

      {/* 내글 1 */}
      <div className="flex justify-end mr-6 mt-3">
        <div className="mr-9 relative">
          <p className="text-[10px] text-[#494949] w-12 absolute bottom-0">
            오후 8:54
          </p>
        </div>
        <div className="bg-[#EADCE2] border-[1.5px] ml-2 border-black px-4 py-2 rounded-lg rounded-tr-none max-w-[250px]">
          <p className="break-all text-base leading-5">아뇨</p>
        </div>
      </div>

      {/* 내글 2 */}
      <div className="flex justify-end mr-6 mt-3">
        <div className="mr-9 relative">
          <p className="text-[10px] text-[#494949] w-12 absolute bottom-0">
            오후 8:54
          </p>
        </div>
        <div className="bg-[#EADCE2] border-[1.5px] ml-2 border-black px-4 py-2 rounded-lg rounded-tr-none max-w-[250px]">
          <p className="break-all text-base leading-5">
            안팔렸는데 사시게요? 네고는 안해드려요~
          </p>
        </div>
      </div>
      {/* 상대방 글3 */}
      <div className="flex ml-6 mt-3">
        <div className="w-9 h-9">
          <img
            src={`https://picsum.photos/480/200`}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex">
          <div className="border-[1.5px] ml-2 border-black px-4 py-2 rounded-lg rounded-tl-none max-w-[250px]">
            <p className="break-all text-base leading-5">
              네고도 없다니.. 그건 좀 섭섭한데요...
            </p>
          </div>
          <div className="ml-2 relative">
            <p className="text-[10px] text-[#494949] w-12 absolute bottom-0">
              오후 8:54
            </p>
          </div>
        </div>
      </div>
      {/* 채팅 입력창 */}
      <div className="absolute bottom-16 right-0 left-0 z-40">
        <div className="flex border-black my-4 mx-4 border-[2px] focus-within:border-brandBlue">
          <input
            placeholder="메세지를 입력하세요"
            className="text-base border-black text-gray-900 w-full h-12 px-3.5 py-2.5"
          />
          <button className="w-14 bg-[#ED2A70] text-3xl text-white">
            <p className="-rotate-45 pb-1">✈</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
