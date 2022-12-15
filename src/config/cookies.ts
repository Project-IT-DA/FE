import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (accessToken: string | undefined) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("user_token", accessToken, {
    sameSite: "strict",
    // secure: false,
    path: "/",
    expires: new Date(expireDate),
    // httpOnly: true,
  });
};

export const getCookieToken = () => {
  return cookies.get("user_token");
};

export const removeCookieToken = () => {
  return cookies.remove("user_token", { sameSite: "strict", path: "/" });
};
