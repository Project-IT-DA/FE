import React, {
  useRef,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";

export function Carousel(props: {
  images: { id: number; src: string; alt?: string }[];
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}) {
  const { images, setNum, num } = props;
  const imageBox = useRef<HTMLDivElement>(null);

  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [touchDownX, setTouchDownX] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.pageX);
  };
  const onMouseUp = () => {
    const imgX = mouseDownClientX - mouseUpClientX;
    if (imgX < -50 && num > 0) {
      setNum(num => num - 1);
    } else if (imgX > 50 && num < images.length - 1) {
      setNum(num => num + 1);
    }
  };
  const onMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setMouseUpClientX(e.pageX);
  };
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchDownX(e.changedTouches[0].pageX);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const distanceX = touchDownX - e.changedTouches[0].pageX;
    e.preventDefault();
    if (distanceX < -70 && num > 0) {
      setNum(num => num - 1);
    } else if (distanceX > 70 && num < images.length - 1) {
      setNum(num => num + 1);
    }
  };
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
