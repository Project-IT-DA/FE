import React, { useRef, Dispatch, SetStateAction } from "react";

export function Carousel(props: {
  images: { id: number; src: string; alt?: string }[];
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}) {
  const { images, num, setNum } = props;
  const imageBox = useRef<HTMLDivElement>(null);
  const nums = [
    "translate-x-[0%]",
    "translate-x-[-100%]",
    "translate-x-[-200%]",
  ];

  return (
    <div className="bg-[#dcdae8] overflow-hidden m-auto">
      <div
        ref={imageBox}
        className={`flex items-center w-full h-full ${nums[num]} transition duration-500 ease-in-out`}
      >
        {images.map(image => {
          return (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-screen h-screen flex-none"
            />
          );
        })}
      </div>
    </div>
  );
}
