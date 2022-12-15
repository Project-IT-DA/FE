import { useState } from "react";
import ArrowUpToggle from "../../elements/ArrowUpToggle";

function Search() {
  const [categoryTg, setCategoryTg] = useState(false);

  return (
    <div className="w-full mt-[20px]">
      <div className="flex items-center">
        <input
          className="w-full h-[44px] px-4 bg-[#EAEAEA] rounded-lg"
          placeholder="상품 키워드 검색 (12자 이내)"
        />
      </div>
      <div className="h-[24px] py-4 mt-2 flex items-center justify-between relative">
        <div className="flex">
          <button
            className="px-4 text-md font-bold"
            onClick={() => setCategoryTg(!categoryTg)}
          >
            카테고리
          </button>
          <ArrowUpToggle
            categoryTg={categoryTg}
            setCategoryTg={setCategoryTg}
          />
          {categoryTg ? (
            <div className="absolute top-10 left-2 w-[100px] border shadow-2xl bg-white">
              <p>노트북</p>
              <p>ㅋㅋㅋ</p>
              <p>노트북</p>
              <p>ㅋㅋㅋ</p>
            </div>
          ) : null}
        </div>
        <div className="pr-4 flex">
          <label className="mr-2 cursor-pointer">
            <input type="checkbox" />
            거래완료 제외
          </label>
          <label className="cursor-pointer">
            <input type="checkbox" />
            찜한 거래만
          </label>
        </div>
      </div>
    </div>
  );
}

export default Search;
