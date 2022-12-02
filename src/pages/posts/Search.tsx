import React from "react";
import { FilterIcon, ArrowUpIcon } from "../../assets/icons";

function Search() {
  //1.클릭하면 아이콘이 사라지고, 키워드 부분이 늘어남.
  //2.하단에 뭐가 생김. 그리고 배경 회색.

  return (
    <div className="w-full mt-[20px]">
      <div className="flex items-center">
        <input
          className="w-full h-[44px] px-4 bg-[#EAEAEA] rounded-lg"
          placeholder="상품 키워드 검색 (12자 이내)"
        />
        {/* <FilterIcon className="w-[44px] h-[44px] ml-1" cursor="pointer" /> */}
      </div>
      <div className="w-full h-28 drop-shadow-2xl">
        <div className="flex justify-between py-3">
          <p className="font-bold">카테고리</p>
          <ArrowUpIcon className="w-4 h-4" />
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-y-1.5 px-3 text-center">
          <p>컴퓨터/노트북</p>
          <p>태블릿/핸드폰</p>
          <p>주변 기기</p>
          <p>주요 부품</p>
          <p>도서</p>
          <p>기타</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
