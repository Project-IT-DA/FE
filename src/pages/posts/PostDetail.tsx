import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { articleApi } from "../../API/articleApi";
import { HeartIcon, MsgIcon } from "../../assets/icons";
import ImageCarousel from "../../components/ImageCarousel";
import { IImg } from "../../types/ImgType";
import PostCreate from "./PostCreate";

const PostDetail = () => {
  const { id } = useParams();
  const { data: article, isSuccess } = articleApi.getArticleDetail(Number(id));
  const [imgs, setImgs] = useState<IImg[]>([]);
  const { mutateAsync: deleteArticle } = articleApi.deleteArticle();
  const { mutateAsync: bookmarkArticle } = articleApi.bookmarkArticle();
  const { mutateAsync: changeSoldStatus } = articleApi.soldStatusArticle();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [editTg, setEditTg] = useState(false);

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

  const onDeletePost = () => {
    deleteArticle(Number(id)).then(() => navigate("/post"));
  };

  const onBookmarkPost = () => {
    bookmarkArticle(Number(id)).then(() =>
      queryClient.invalidateQueries(["article"]),
    );
  };

  const onChangeSoldStatus = () => {
    changeSoldStatus(Number(id)).then(() =>
      queryClient.invalidateQueries(["article"]),
    );
  };

  return (
    <div className="w-full  mb-[100px]">
      {editTg === true ? (
        <div className="absolute top-14 z-40 w-full bg-white h-full">
          <PostCreate article={article} />
        </div>
      ) : null}

      <div className="mx-8 my-4 pb-4 border-b relative">
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
              <p>????????????: {article?.density}%</p>
            </div>
            <div className="absolute top-0 right-0">
              <button className="text-red-500" onClick={onDeletePost}>
                ??????
              </button>
              <button className="text-blue-500" onClick={() => setEditTg(true)}>
                ??????
              </button>
              <button className="text-green-500" onClick={onChangeSoldStatus}>
                {article?.status === "SELL"
                  ? "??????????????? ??????"
                  : "??????????????? ??????"}
              </button>
            </div>
          </div>

          <p className="pt-5">?????????: {article?.createdAt}</p>
          {/* FIXME: ????????? ???????????? */}
        </div>
      </div>
      {/* TODO: ????????? ???????????? ????????????! */}

      <div className="w-full bg-pink-300 flex">
        <ImageCarousel images={imgs} />
      </div>

      <div className="flex justify-between mx-8 mt-4">
        <p className="bg-[#494949] text-white rounded-md px-6 py-2">
          {article?.status === "SELL" ? "????????????" : "?????????"}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <span className="flex " onClick={onBookmarkPost}>
            <HeartIcon className="mr-2" /> {article?.like ? "???" : "??????"}
          </span>
        </div>
      </div>
      <div className="mx-8 my-4">
        <div className="mb-10">
          <p className="font-semibold">
            ?????? : <span className="text-[#ED2A70]">{article?.sellPrice}</span>
            ???{" "}
          </p>
          <p className="font-semibold">????????? ?????? : {article?.location}</p>
        </div>
        <div>
          <p>{article?.substance}</p>
        </div>
      </div>
      {/* <div className="w-[90%] h-[300px] mx-auto bg-green-400 p-5">???</div> */}
    </div>
  );
};

export default PostDetail;
