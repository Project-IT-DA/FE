import { instance } from "../config/axios";

const oAuthApi = {
  loginWithKakao: async (kakaoToken: string) => {
    return await instance
      .get(`users/login/kakao?code=${kakaoToken}`)
      .then(data => {
        console.log(data);
      })
      .then(() => {
        window.location.href = "/";
      });
  },
};

export default oAuthApi;
