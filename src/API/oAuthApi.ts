import { instance } from "../config/axios";
import { setAccessToken } from "../config/cookies";

const oAuthApi = {
  loginWithKakao: async (kakaoToken: string) => {
    return await instance
      .get(`users/login/kakao?code=${kakaoToken}`)
      .then(data => {
        setAccessToken(data.headers.authorization?.replace("BEARER ", ""));
      })
      .then(() => {
        window.location.href = "/post";
      });
  },
  loginWithGoogle: async (googleToken: string) => {
    return await instance
      .get(`users/login/google?code=${googleToken}`)
      .then(data => {
        setAccessToken(data.headers.authorization?.replace("BEARER ", ""));
        console.log(data);
      })
      .then(() => {
        window.location.href = "/post";
      });
  },
};

export default oAuthApi;
