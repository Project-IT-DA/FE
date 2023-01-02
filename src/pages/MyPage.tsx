import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { UserInfoApi } from "../API/userInfoApi";
import { EditIcon } from "../assets/icons";
import { removeCookieToken } from "../config/cookies";
import { loginInfoState } from "../store/loginInfoState";
import { LoginInfoType } from "../types/loginInfoType";

const MyPage = () => {
  const { data } = UserInfoApi.getUserInfo();
  const [userProfile, setUserProfile] = useState<LoginInfoType>();
  const [profileImg, setProfileImg] = useState("");
  const queryClient = useQueryClient();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("프로필사진변경");
  };

  console.log(data);
  const onLogout = () => {
    removeCookieToken();
    window.location.href = "/";
  };

  return (
    <>
      <div className="h-full overflow-y-scroll pb-[3rem]">
        <div className="w-full mt-[50px] flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center relative">
              <img
                className="w-36 h-36 rounded-full mx-2"
                alt="profileimg"
                src={data?.data.profileImg}
              />
              <label
                className="flex justify-center items-center absolute w-14 h-14 rounded-full right-[2px] bottom-0"
                htmlFor="icon-button-file"
              >
                <input
                  type="file"
                  id="icon-button-file"
                  className="hidden"
                  // ref="none"
                  onChange={onChange}
                />
                <EditIcon aria-label="upload picture" />
              </label>
            </div>
            <div className="mt-[10px] items-center justify-center w-full flex-col flex relative">
              <div className="font-bold justify-center">
                <span className="text-3xl">{data?.data.username}</span>
                <span className="text-2xl ml-2">님</span>
              </div>
              <div className="font-bold text-lg justify-center">
                <span className="m-1">잇다 농도: </span>
                <span className="text-[#ED2A70]">{data?.data.density}</span>
                <span className="font-bold ml-1">%</span>
              </div>
            </div>
            <button className="bg-[#ED2A70] text-white h-13 p-2.5 mt-[5px] rounded-lg text-base font-semibold">
              프로필수정
            </button>
          </div>
        </div>
        <div className="w-full mt-[15px] flex justify-center">
          <hr className="bg-[#949494] w-11/12"></hr>
        </div>
        <div className="mt-[15px] ml-7 flex justify-flex-start w-11/12 flex-col">
          <div>
            <p className="text-base font-semibold">활동내역</p>
            <div className="mt-[15px] bg-[#F59AA7] rounded-lg w-11/12 justify-flex-start">
              <button className="pt-5 pb-5 pr-7 pl-7">
                😀 {data?.data.username} 님의 커뮤니티 게시글 &gt;
              </button>
              <button className="pt-5 pb-5 pr-7 pl-7">
                👍 {data?.data.username} 님의 커뮤니티 코멘트 &gt;
              </button>
            </div>
          </div>

          <div>
            <p className="mt-[30px] text-base font-semibold">
              회원탈퇴 및 로그아웃
            </p>
            <div className="mt-[15px] bg-[#F59AA7] rounded-lg w-11/12 justify-flex-start">
              <button className="pt-5 pb-5 pr-7 pl-7">
                😢 회원탈퇴하고 잇다와 끊어지기 &gt;
              </button>
              <button className="pt-5 pb-5 pr-7 pl-7" onClick={onLogout}>
                🖐 로그아웃 &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
