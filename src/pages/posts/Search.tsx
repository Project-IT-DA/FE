import { useState } from "react";
import { ArrowUpIcon } from "../../assets/icons";

function Search() {
  const [isClicked, setIsClicked] = useState(false);

  const showCategory = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full mt-[20px]">
      <div className="flex items-center">
        <input
          className="w-full h-[44px] px-4 bg-[#EAEAEA] rounded-lg"
          placeholder="상품 키워드 검색 (12자 이내)"
        />
      </div>
      <div className="w-full h-fit">
        <div className="flex justify-between py-3">
          <p className="font-bold">카테고리</p>
          <ArrowUpIcon
            className="w-4 h-4"
            onClick={showCategory}
            cursor="pointer"
          />
        </div>
        <div
          className={`${
            !isClicked ? "hidden" : "grid"
          } grid-cols-3 grid-rows-2 gap-y-1.5 px-3 mb-3 text-center`}
        >
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
