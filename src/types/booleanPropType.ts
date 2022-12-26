import { Dispatch, SetStateAction } from "react";

export interface IBooleanProps {
  tg: boolean;
  setTg: Dispatch<SetStateAction<boolean>>;
}
