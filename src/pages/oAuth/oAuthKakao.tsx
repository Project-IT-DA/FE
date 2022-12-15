import { useEffect } from "react";
import oAuthApi from "../../API/oAuthApi";

const OAuthKakao = () => {
  const kakaoToken = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    try {
      if (kakaoToken) {
        oAuthApi.loginWithKakao(kakaoToken);
      }
    } catch (err) {
      alert("kakao login error");
    }
  }, []);
  return (
    <>
      <p>로그인중~</p>
    </>
  );
};

export default OAuthKakao;
