import { atom } from "recoil";
import { LoginInfoType } from "../types/loginInfoType";

export const loginInfoState = atom<LoginInfoType>({
  key: "loginInfoState",
  default: {
    id: 0,
    username: "",
    profileImageUrl: "",
    email: "",
  },
});
