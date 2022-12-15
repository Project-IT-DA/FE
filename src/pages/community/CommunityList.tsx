import { useNavigate } from "react-router-dom";
import { MenuIcon, CommentIcon } from "../../assets/icons";

function CommunityList() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center mt-4 py-4 mx-4">
        <h1 className="text-xl font-bold text-center">IT에 관한 모든 이야기</h1>
      </div>
      <div className="w-full h-fit border-b-8 border-[#D9D9D9]">
        <div className="w-full h-fit">
          <div className="px-8 w-full h-fit">
            <div className="flex mt-3 justify-between border-b py-[11px]">
              <div className="flex">
                <img
                  src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
                  className="w-10 h-10 rounded-full mx-2"
                />
                <div>
                  <p className="font-bold">잇다매니아</p>
                  <p>등록일: 2022-11-22</p>
                </div>
              </div>
              <MenuIcon cursor="pointer" />
            </div>
            <div className="my-4 text-center">
              <p>내용입니다 내용내용내용...더보기 기능 붙일 예정</p>
            </div>
          </div>
          <img
            src="https://picsum.photos/480/220"
            alt="image"
            className="cursor-pointer"
            onClick={() => navigate("/community/1")}
          />
          {/* <div className="px-8 h-[50px] flex items-center">
            <CommentIcon cursor="pointer" />
            <span className="pl-1 font-bold">32개</span>
          </div> */}
          <div className="px-[20px] flex items-center border-b h-[70px]">
            <div className="flex items-center">
              <CommentIcon cursor="pointer" />
              <span className="font-bold ml-[10px]">32개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityList;
