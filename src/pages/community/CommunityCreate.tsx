import { useState } from "react";
import { CameraIcon, CancelIcon } from "../../assets/icons";
import ArrowUpToggle from "../../elements/ArrowUpToggle";
import useMultiUploadImg from "../../hooks/useMultiUploadImg";

const CommunityCreate = () => {
  const [uploadImg, uploadImgHandler, onDeleteImg] = useMultiUploadImg(5);
  const [categoryTg, setCategoryTg] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const data = {
      uploadImg,
      content,
      title: "test",
    };
  };

  return (
    <div className="w-full mb-[100px]">
      <div className="flex justify-center mt-4 py-4 border-y mx-4">
        <h1 className="text-xl font-bold text-center">커뮤니티 글 작성하기</h1>
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
            <p>커뮤니티</p>
            <p>카테고리</p>
            <p>뭐뭐</p>
            <p>있지?</p>
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
      <div className="flex justify-end mx-6 h-[450px]">
        <textarea
          id="message"
          rows={7}
          className="p-5 mt-3 w-full placeholder-black bg-[#DDDBE9] rounded-sm "
          placeholder="내용(1000자 이하)"
          style={{ resize: "none" }}
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4 my-4 mx-6">
        <button className="bg-[#9D9D9D] text-white py-3 rounded-md text-xl">
          취소
        </button>
        <button
          className="bg-[#ED2A70] text-white py-3 rounded-md text-xl"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default CommunityCreate;
