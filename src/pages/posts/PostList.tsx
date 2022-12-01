import React from "react";
import { SearchIcon, MenuIcon } from "../../assets/icons";

function PostList() {
  return (
    <div className="mx-8 flex flex-col items-center justify-center">
      <div className="w-full mt-[20px] flex items-center">
        <input
          className="w-full h-[44px] px-4 bg-[#EAEAEA] rounded-lg mb-1"
          placeholder="상품 키워드 검색 (12자 이내)"
        />
      </div>
      <div className="w-full mb-5">
        <label className="mr-2 text-sm">
          <input type="checkbox" />
          거래완료 제외
        </label>
        <label className="text-sm">
          <input type="checkbox" />
          찜한 거래만
        </label>
      </div>

      {/* 버튼 분리 필요*/}
      <div className="w-full h-32 flex py-4 border-b">
        <div className="w-24 h-24 mr-[16px] border"></div>
        <div className="w-[calc(100%-6rem)] h-full">
          <p className="font-bold mb-1">제목입니다</p>
          <p className="text-xs">신사동 10초전</p>
          <div className="w-full flex items-center mt-7">
            <div className="w-11 h-5 bg-[#2E2AED] rounded-lg flex items-center justify-center mr-1.5">
              <p className="text-xs text-white">거래중</p>
            </div>
            <p className="font-extrabold text-lg">1,000원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
