import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { articleApi } from "../../API/articleApi";
import {
  BookMarkEmpty,
  BookMarkFull,
  HeartIcon,
  MenuIcon,
} from "../../assets/icons";
import FullScreenCarousel from "../../components/FullScreenCarousel";
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
  const [fullTg, setFullTg] = useState(false);
  const [menuTg, setMenuTg] = useState(false);

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
          <PostCreate article={article} setEditTg={setEditTg} />
        </div>
      ) : null}
      {fullTg === true ? (
        <FullScreenCarousel>
          <ImageCarousel images={imgs} />
        </FullScreenCarousel>
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
              <p>잇다농도: {article?.density}%</p>
            </div>
            <div
              className="absolute top-0 right-0"
              onClick={() => setMenuTg(!menuTg)}
            >
              <MenuIcon />
            </div>
            {menuTg ? (
              <div className="absolute right-0 top-10 flex flex-col items-start bg-white border shadow-2xl">
                <button className="text-red-500" onClick={onDeletePost}>
                  삭제
                </button>
                <button
                  className="text-blue-500"
                  onClick={() => setEditTg(true)}
                >
                  편집
                </button>
                <button className="text-green-500" onClick={onChangeSoldStatus}>
                  {article?.status === "SELL"
                    ? "거래중으로 변경"
                    : "판매중으로 변경"}
                </button>
              </div>
            ) : null}
          </div>

          <p className="pt-5">
            등록일:{" "}
            {article ? new Date(article.createdAt).toLocaleDateString() : null}
          </p>
          {/* FIXME: 날짜값 변경하기 */}
        </div>
      </div>
      {/* TODO: 위에꺼 컴포넌트 분리할것! */}

      <div className="w-full bg-pink-300 flex ">
        <ImageCarousel images={imgs} />
      </div>

      <div className="flex justify-between mx-6 mt-4">
        <p
          className={`
            ${article?.status === "SELL" ? "bg-[#494949]" : "bg-[#2E2AED]"}
              text-white rounded-md px-6 py-2
          `}
        >
          {article?.status === "SELL" ? "거래완료" : "거래중"}
        </p>
        <div>
          <span onClick={onBookmarkPost} className="mt-4">
            {article?.like ? <BookMarkFull /> : <BookMarkEmpty />}
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
      {/* <div className="w-[90%] h-[300px] mx-auto bg-green-400 p-5">맵</div> */}
    </div>
  );
};

export default PostDetail;
