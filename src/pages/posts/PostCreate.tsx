import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { articleApi } from "../../API/articleApi";
import { CameraIcon, CancelIcon } from "../../assets/icons";
import ArrowUpToggle from "../../elements/ArrowUpToggle";
import NanumToggle from "../../elements/NanumToggle";
import PostInput from "../../elements/PostInput";
import useMultiUploadImg from "../../hooks/useMultiUploadImg";

const PostCreate = () => {
  //img 업로드
  //useMultiUploadImg 라는 커스텀 훅에서 base64 이미지 리스트와 이미지를 변환시켜주는 핸들러를 리턴해줍니다.
  //파라미터에는 업로드 할수있는 사진수를 지정해줍니다.
  const [uploadImg, uploadImgHandler, onDeleteImg, imgFile] =
    useMultiUploadImg(5);

  //input에 대한 state 관리. 구조분해 할당으로 한번에 하고싶지만 타입지정때문에 너무 번거롭다..
  //useRef를 이용해서 관리할까? 렌더링이 너무 많이 일어나는것 같다.
  const [categoryTg, setCategoryTg] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");

  const { mutateAsync: postArticle } = articleApi.postArticle();
  const navigate = useNavigate();

  const onPost = () => {
    // if (title === "" || price === "" || location === "" || content === "")
    //   return;
    const formdata = new FormData();

    const value = {
      articleName: title,
      category: "PC",
      location: location,
      sellPrice: price,
      substance: content,
    };
    const blob = JSON.stringify(value);

    formdata.append("data", blob);
    for (const file of Array.from(imgFile)) {
      formdata.append("file", file);
    }
    //filelist는 유사배열 객체이기때문에 Array.from을 써서 배열형식으로 변환.

    postArticle(formdata).then(() => {
      navigate("/post");
    });
  };

  return (
    <div className="w-full mb-[100px]">
      <div className="flex justify-center mt-4 py-4 border-y mx-4">
        <h1 className="text-xl font-bold text-center">거래글 작성하기</h1>
      </div>
      <div className="py-4 border-b mx-4 flex relative">
        <button
          className="px-4 text-md font-bold"
          onClick={() => setCategoryTg(!categoryTg)}
        >
          카테고리
        </button>
        <ArrowUpToggle categoryTg={categoryTg} setCategoryTg={setCategoryTg} />
        {categoryTg ? (
          <div className="absolute top-10 left-2 w-[100px] border shadow-2xl bg-white">
            <p>노트북</p>
            <p>ㅋㅋㅋ</p>
            <p>노트북</p>
            <p>ㅋㅋㅋ</p>
          </div>
        ) : null}
      </div>
      <div>
        <div className="flex mt-6 mx-6">
          <div>
            <label htmlFor="uploadImg" className="cursor-pointer">
              <div className="w-[80px] h-[62px] bottom-[-10px] mr-2 flex flex-col justify-center items-center bg-[#cdcdcd] rounded-lg">
                <CameraIcon className="mt-1" />
                <p className="font-itda text-sm mt-1">
                  <span className={`font-itda text-itdaPink`}>
                    {uploadImg.length}
                  </span>
                  /5
                </p>
              </div>
            </label>
            <input
              type="file"
              className="hidden"
              id="uploadImg"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              multiple
              onChange={uploadImgHandler}
            />
          </div>{" "}
          <div className="flex space-x-2 overflow-x-auto">
            {uploadImg?.map((img, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 relative w-[80px] h-[62px]"
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={img}
                  alt="s"
                />
                <button
                  className="absolute top-1 right-1"
                  onClick={() => onDeleteImg(idx)}
                >
                  <CancelIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 사진 컴포넌트 따로 분리하기 */}
      <PostInput
        placeholder="제목(20자 이하)"
        val={title}
        onChange={setTitle}
      />
      <div className="flex items-center my-4">
        <input
          type="number"
          value={price}
          step={1000}
          onChange={e => setPrice(e.target.value)}
          className="w-full mx-6 px-4 placeholder-black bg-[#DDDBE9] h-12 rounded-sm"
          placeholder="가격(1억원이하)"
        />
      </div>

      <div className="flex justify-end mr-6">
        <NanumToggle />
      </div>
      <PostInput
        placeholder="직거래 위치(20자 이하)"
        val={location}
        onChange={setLocation}
      />
      <div className="flex justify-end mx-6">
        <textarea
          id="message"
          rows={7}
          className="p-2.5 mt-3 w-full placeholder-black bg-[#DDDBE9] rounded-sm "
          placeholder="프로젝트 내용을 입력해주세요."
          style={{ resize: "none" }}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4 my-4 mx-6">
        <button className="bg-[#9D9D9D] text-white py-4 rounded-md">
          취소
        </button>
        <button
          className="bg-[#ED2A70] text-white py-4 rounded-md"
          onClick={onPost}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default PostCreate;
