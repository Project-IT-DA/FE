import { Dispatch, SetStateAction } from "react";

export interface Inum {
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}
