import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articleApi } from "../../API/articleApi";
import { HeartIcon, MsgIcon } from "../../assets/icons";
import ImageCarousel from "../../components/ImageCarousel";
import { productImages } from "../../data/productImages";

interface IImg {
  id: number;
  src: string;
  alt: string;
}

const PostDetail = () => {
  const { id } = useParams();
  const { data: article, isSuccess } = articleApi.getArticleDetail(Number(id));
  const [imgs, setImgs] = useState<IImg[]>([]);

  useEffect(() => {
    if (isSuccess && imgs.length === 0) {
      for (let i = 0; i < article.fileUrl.length; i++) {
        setImgs(img => [
          ...img,
          { id: i, src: article.fileUrl[i], alt: article.fileName[i] },
        ]);
      }
    }
  }, [isSuccess]);

  return (
    <div className="w-full  mb-[100px]">
      <div className="mx-8 my-4 pb-4 border-b">
        <h3 className="font-bold text-lg">{article?.articleName}</h3>
        <div className="flex mt-3 justify-between">
          <div className="flex">
            <img
              src={`https://avatars.githubusercontent.com/u/108189281?v=4`}
              className="w-10 h-10 rounded-full mx-2"
            />
            <div>
              {/* username */}
              <p className="font-bold">{article?.username}</p>
              <p>잇다농도: {article?.density}%</p>
            </div>
          </div>

          <p className="pt-5">등록일: 2022-11-22</p>
        </div>
      </div>
      {/* 위에꺼 컴포넌트 분리할것! */}

      <div className="w-full bg-pink-300 flex">
        <ImageCarousel images={imgs} />
      </div>

      <div className="flex justify-between mx-8 mt-4">
        <button className="bg-[#494949] text-white rounded-md px-6 py-2">
          {article?.status === "SELL" ? "거래완료" : "거래중"}
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
            가격 : <span className="text-[#ED2A70]">{article?.sellPrice}</span>
            원{" "}
          </p>
          <p className="font-semibold">직거래 위치 : {article?.location}</p>
        </div>
        <div>
          <p>{article?.substance}</p>
        </div>
      </div>
      <div className="w-[90%] h-[300px] mx-auto bg-green-400 p-5">맵</div>
    </div>
  );
};

export default PostDetail;
