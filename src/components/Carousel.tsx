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
  const { images, num } = props;
  const imageBox = useRef<HTMLDivElement>(null);

  // const [isClick, setIsClick] = useState(false);
  // const [mouseDownClientX, setMouseDownClientX] = useState(0);
  // const [mouseUpClientX, setMouseUpClientX] = useState(0);

  // const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   setIsClick(true);
  //   setMouseDownClientX(e.pageX);
  // };

  // const onMouseLeave = () => {
  //   setIsClick(false);
  // };

  // const onMouseUp = () => {
  //   setIsClick(false);
  //   const imgX = mouseDownClientX - mouseUpClientX;

  //   if (imgX < -100 && imageBox.current !== null) {
  //     imageBox.current.style.transform = `translate(${imgX}px)`;
  //     // setNum(num => num - 1);
  //   } else if (imgX > 100 && imageBox.current !== null) {
  //     imageBox.current.style.transform = `translate(-${imgX}px)`;
  //     // setNum(num => num + 1);
  //   }
  //   console.log(imgX);
  // };

  // const onMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   if (!isClick) return;
  //   e.preventDefault();
  //   setMouseUpClientX(e.pageX);
  // };

  return (
    <div className="bg-[#dcdae8] overflow-hidden m-auto">
      <StContainer
        ref={imageBox}
        num={num}
        // onMouseDown={onMouseDown}
        // onMouseUp={onMouseUp}
        // onMouseLeave={onMouseLeave}
        // onMouseMove={onMouseMove}
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
      </StContainer>
    </div>
  );
}

const StContainer = styled.div<{ num: number }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateX(-${props => props.num * 100}%);
  transition: transform 500ms ease-in-out;
`;
function setNum(arg0: (num: any) => any) {
  throw new Error("Function not implemented.");
}
