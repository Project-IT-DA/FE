import { instance } from "../config/axios";
import { setAccessToken } from "../config/cookies";

const oAuthApi = {
  loginWithKakao: async (kakaoToken: string) => {
    return await instance
      .get(`users/login/kakao?code=${kakaoToken}`)
      .then(data => {
        setAccessToken(data.headers.authorization);
        console.log(data);
      })
      .then(() => {
        window.location.href = "/post";
      });
  },
};

export default oAuthApi;
