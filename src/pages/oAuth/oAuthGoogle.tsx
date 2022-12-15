import { useEffect } from "react";
import oAuthApi from "../../API/oAuthApi";

const oAuthGoogle = () => {
  const googleToken = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    try {
      if (googleToken) {
        oAuthApi.loginWithGoogle(googleToken);
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

export default oAuthGoogle;
