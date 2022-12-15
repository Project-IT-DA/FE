import { useState } from "react";
import { HeartIcon, LineHeartIcon } from "../../assets/icons";
import Search from "./Search";

function PostList() {
  const [isLiked, setIsLiked] = useState(true);

  const onClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mx-5 flex flex-col items-center justify-center">
      <Search />
      <div className="w-full h-32 mt-3 flex p-4 border-2 rounded-lg">
        <div className="w-24 h-24 mr-[16px] bg-slate-400 rounded-md"></div>
        <div className="w-[calc(100%-6rem)] h-full">
          <p className="mb-1">집 팔기</p>
          <p className="text-xs">신사동 10초전</p>
          <div className="w-full flex items-center mt-7 justify-between">
            <div className="flex items-center">
              <div className="w-11 h-5 bg-[#2E2AED] rounded-lg flex items-center justify-center mr-1.5">
                <p className="text-xs text-center text-white">거래중</p>
              </div>
              <p className="font-extrabold text-lg">1,000원</p>
            </div>
            {!isLiked ? (
              <LineHeartIcon cursor="pointer" onClick={onClick} />
            ) : (
              <HeartIcon cursor="pointer" onClick={onClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
