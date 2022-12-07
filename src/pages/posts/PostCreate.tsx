import { CameraIcon, CancelIcon } from "../../assets/icons";
import NanumToggle from "../../elements/NanumToggle";
import useMultiUploadImg from "../../hooks/useMultiUploadImg";

const PostCreate = () => {
  //img 업로드
  //useMultiUploadImg 라는 커스텀 훅에서 base64 이미지 리스트와 이미지를 변환시켜주는 핸들러를 리턴해줍니다.
  //파라미터에는 업로드 할수있는 사진수를 지정해줍니다.
  const [uploadImg, uploadImgHandler] = useMultiUploadImg(5);

  console.log(uploadImg.length);

  return (
    <div className="w-full mb-[100px]">
      <div className="flex justify-center mt-4 py-4 border-y mx-4">
        <h1 className="text-xl font-bold text-center">거래글 작성하기</h1>
      </div>
      <div className="py-4 border-b mx-4">
        <h1 className="px-4 text-md font-bold">카테고리</h1>
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
                <button className="absolute top-1 right-1">
                  <CancelIcon />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 사진 컴포넌트 따로 분리하기 */}
      <div className="flex items-center my-4">
        <input
          className="w-full mx-6 px-4 placeholder-black bg-[#DDDBE9] h-12 rounded-sm"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="flex justify-end mr-6">
        <NanumToggle />
      </div>

      <div className="grid grid-cols-2 gap-x-4 my-4 mx-6">
        <button className="bg-[#9D9D9D] text-white py-4 rounded-md">
          취소
        </button>
        <button className="bg-[#ED2A70] text-white py-4 rounded-md">
          등록
        </button>
      </div>
    </div>
  );
};

export default PostCreate;
