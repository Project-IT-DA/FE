import useSlideImage from "../hooks/useSlideImage";
import styled from "styled-components";

const ImageCarousel = (props: {
  images: { id: number; src: string; alt?: string }[];
}) => {
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
    onTouchMove,
  } = useSlideImage({ images });

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
        onTouchMove={onTouchMove}
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
