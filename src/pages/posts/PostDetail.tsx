import { HeartIcon, MsgIcon } from "../../assets/icons";

const PostDetail = () => {
  return (
    <div className="w-full  mb-[100px]">
      <div className="mx-8 my-4 pb-4 border-b">
        <h3 className="font-bold text-lg">코딩대신하는 마우스 팝니다.</h3>
        <div className="flex mt-3 justify-between">
          <div className="flex">
            <img
              src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
              className="w-10 h-10 rounded-full mx-2"
            />
            <div>
              <p className="font-bold">잇다매니아</p>
              <p>잇다농도: 99%</p>
            </div>
          </div>

          <p className="pt-5">등록일: 2022-11-22</p>
        </div>
      </div>
      {/* 위에꺼 컴포넌트 분리할것! */}

      <div className="w-full h-[350px] bg-pink-300"></div>

      <div className="flex justify-between mx-8 mt-4">
        <button className="bg-[#494949] text-white rounded-md px-6 py-2">
          거래완료
        </button>
        <div className="grid grid-cols-2 gap-3">
          <span className="flex ">
            <HeartIcon className="mr-2" /> 20
          </span>
          <span className="flex">
            <MsgIcon className="mr-2" /> 30
          </span>
        </div>
      </div>
      <div className="mx-8 my-4">
        <div className="mb-10">
          <p className="font-semibold">
            가격 : <span className="text-[#ED2A70]">150,000</span>원{" "}
          </p>
          <p className="font-semibold">직거래 위치 : 우리집앞</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
            at sapiente natus, maxime, vitae alias saepe voluptas libero
            repellendus sed dicta similique veniam, minus reprehenderit qui
            autem debitis pariatur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique ea modi voluptas sint quod? Eos officiis
            alias cupiditate facilis ab iusto. Ex nam corporis maiores
            temporibus aperiam, ratione a earum!
          </p>
        </div>
      </div>
      <div className="w-[90%] h-[300px] mx-auto bg-green-400 p-5">맵</div>
    </div>
  );
};

export default PostDetail;
