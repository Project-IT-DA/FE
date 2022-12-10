import React from "react";

const Comment = () => {
  return (
    <div className="w-full min-h-[100px] border-b-2 flex">
      <img
        src="https://avatars.githubusercontent.com/u/108189281?v=4"
        className="w-10 h-10 rounded-full mx-4 mt-4"
      />
      <div className="flex flex-col">
        <div className="flex">
          <span className="font-bold m-4">잼민이</span>
          <span className="mt-4 ml-[-0.5rem] text-[#999999]">(2022-11-20)</span>
          <span className="text-[#999999] mt-4 absolute left-[82%]">수정</span>
          <span className="text-[#999999] mt-4 absolute left-[90%]">삭제</span>
        </div>
        <span className="ml-4 w-[90%] mb-4">
          댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트댓글테스트
        </span>
      </div>
    </div>
  );
};

export default Comment;
