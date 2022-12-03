import React, { useRef, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export function Carousel(props: {
  images: { id: number; src: string; alt?: string }[];
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}) {
  const { images, num } = props;
  const imageBox = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#dcdae8] overflow-hidden m-auto">
      <StContainer ref={imageBox} num={num}>
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
