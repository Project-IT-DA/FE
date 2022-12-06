const PostCreate = () => {
  return (
    <div className="w-full mb-[100px]">
      <div className="flex justify-center mt-4 py-4 border-y mx-4">
        <h1 className="text-xl font-bold text-center">거래글 작성하기</h1>
      </div>
      <div className="py-4 border-b mx-4">
        <h1 className="px-4 text-md font-bold">카테고리</h1>
      </div>
      <div>
        <div className="flex mt-6 mx-6 justify-between">
          <img
            className="w-24 h-16 rounded-lg"
            src="https://avatars.githubusercontent.com/u/79081800?v=4"
          />
          <img
            className="w-24 h-16 rounded-lg"
            src="https://avatars.githubusercontent.com/u/79081800?v=4"
          />{" "}
          <img
            className="w-24 h-16 rounded-lg"
            src="https://avatars.githubusercontent.com/u/79081800?v=4"
          />{" "}
          <img
            className="w-24 h-16 rounded-lg"
            src="https://avatars.githubusercontent.com/u/79081800?v=4"
          />
        </div>
      </div>
      {/* 사진 컴포넌트 따로 분리하기 */}
      <div className="flex items-center my-4">
        <input
          className="w-full mx-6 px-4 placeholder-black bg-[#DDDBE9] h-12 rounded-lg"
          placeholder="제목을 입력하세요"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4 my-4 mx-6">
        <button className="bg-[#9D9D9D] text-white py-4 rounded-md">
          취소
        </button>
        <button className="bg-[#ED2A70] text-white py-4 rounded-md">
          등록
        </button>
      </div>
    </div>
  );
};

export default PostCreate;
