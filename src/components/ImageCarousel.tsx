import React, { useState, useRef, Fragment } from "react";
import styled from "styled-components";

const ImageCarousel = (props: {
  images: { id: number; src: string; alt?: string }[];
}) => {
  const { images } = props;
  const [num, setNum] = useState<number>(0);
  const imageBox = useRef<HTMLDivElement>(null);

  const [isClick, setIsClick] = useState(false);
  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsClick(true);
    setMouseDownClientX(e.pageX);
  };
  const onMouseUp = () => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;

    if (imgX < -50 && num > 0) {
      setNum(num => num - 1);
    } else if (imgX > 50 && num < 2) {
      setNum(num => num + 1);
    }
  };
  const onMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isClick) return;
    e.preventDefault();
    setMouseUpClientX(e.pageX);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    setIsClick(true);
    setMouseDownClientX(e.changedTouches[0].pageX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const distanceX = mouseDownClientX - e.changedTouches[0].pageX;
    if (distanceX < -50 && num > 0) {
      setNum(num => num - 1);
    } else if (distanceX > 50 && num < 2) {
      setNum(num => num + 1);
    }
  };

  return (
    <div className=" m-auto overflow-hidden relative">
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
              className="flex-none"
            />
          );
        })}
      </StContainer>
      <div className="flex w-[12%] absolute justify-evenly bottom-3 left-3">
        {images.map(dot => {
          return (
            <div
              className={`rounded-[50%] w-3 h-3 ${
                num === dot.id ? "bg-[#ED2A70]" : "bg-white"
              } cursor-pointer`}
              onClick={() => {
                setNum(dot.id);
              }}
              key={dot.id}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;

const StContainer = styled.div<{ num: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  transform: translateX(-${props => props.num * 100}%);
  transition: transform 500ms ease-in-out;
`;
