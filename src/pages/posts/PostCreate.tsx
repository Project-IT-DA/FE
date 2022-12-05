const PostCreate = () => {
  return (
    <div className="w-full  mb-[100px]">
      <div className="flex justify-center mt-4 py-4 border-y mx-4">
        <h1 className="text-xl font-bold text-center">거래글 작성하기</h1>
      </div>
      <div className=" py-4 border-b mx-4">
        <h1 className="px-4 text-md font-bold">카테고리</h1>
      </div>
      <div className="w-full mt-6">
        <input
          className="w-[90%] bg-slate-200  h-12 rounded-lg"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="w-full mt-6">
        <input
          className="w-[90%] bg-slate-200  h-12 rounded-lg"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="w-full mt-6">
        <input
          className="w-[90%] bg-slate-200  h-12 rounded-lg"
          placeholder="제목을 입력하세요"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4 my-4 mx-4">
        <button className="bg-gray-400 py-4 rounded-md">취소</button>
        <button className="bg-red-400 py-4 rounded-md">취소</button>
      </div>
    </div>
  );
};

export default PostCreate;
