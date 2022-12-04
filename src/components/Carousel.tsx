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

  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseDownClientY, setMouseDownClientY] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [mouseUpClientY, setMouseUpClientY] = useState(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.clientX);
    setMouseDownClientY(e.clientY);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientX(e.clientX);
    setMouseUpClientY(e.clientY);
  };
  console.log(mouseDownClientX, mouseUpClientX);
  useEffect(() => {
    const dragSpaceX = Math.abs(mouseDownClientX - mouseUpClientX);
    const dragSpaceY = Math.abs(mouseDownClientY - mouseUpClientY);
    const vector = dragSpaceX / dragSpaceY;

    if (mouseDownClientX !== 0 && dragSpaceX > 100 && vector > 2) {
      if (mouseUpClientX < mouseDownClientX) {
        setNum(num => num + 1);
      } else if (mouseUpClientX > mouseDownClientX) {
        setNum(num => num - 1);
      }
    }
  }, [mouseUpClientX]);

  return (
    <div className="bg-[#dcdae8] overflow-hidden m-auto">
      <StContainer
        ref={imageBox}
        num={num}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
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
