import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import useSlideImage from "../../hooks/useSlideImage";

export function Carousel(props: {
  images: { id: number; src: string; alt?: string }[];
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}) {
  const { images } = props;
  const {
    imageBox,
    num,
    setNum,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchEnd,
  } = useSlideImage({ images });

  return (
    <div className="bg-[#dcdae8] overflow-hidden m-auto absolute">
      <StContainer
        ref={imageBox}
        num={num}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map(image => {
          return (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-screen max-h-full flex-none"
            />
          );
        })}
      </StContainer>
    </div>
  );
}

export const StContainer = styled.div<{ num: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateX(-${props => props.num * 100}%);
  transition: transform 500ms ease-in-out;
  position: relative;
`;
// function setNum(arg0: (num: any) => any) {
//   throw new Error("Function not implemented.");
// }
