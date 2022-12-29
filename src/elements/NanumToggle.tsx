import { useState } from "react";
import { IBooleanProps } from "../types/booleanPropType";

const NanumToggle = ({ tg, setTg }: IBooleanProps) => {
  return (
    <div>
      <label className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" checked={tg} className="sr-only peer" readOnly />

        <div
          onClick={() => {
            setTg(!tg);
          }}
          className="w-[112px] h-[44px] bg-[#F7819A] peer-focus:outline-none rounded-3xl peer peer-checked:after:translate-x-[200%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[5px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[34px] after:w-[34px] after:transition-all peer-checked:bg-itdaPink"
        ></div>
        <div
          className="absolute right-3 text-sm font-bold text-white peer peer-checked:left-3"
          onClick={() => {
            setTg(!tg);
          }}
        >
          나눔 {tg ? "ON" : "OFF"}
        </div>
      </label>
    </div>
  );
};

export default NanumToggle;
