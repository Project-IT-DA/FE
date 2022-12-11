import React, { useState, useRef, Dispatch, SetStateAction } from "react";

const useSlideImage = (props: {
  images: { id: number; src: string; alt?: string }[];
}) => {
  const { images } = props;
  const [num, setNum] = useState<number>(0);
  const imageBox = useRef<HTMLDivElement>(null);

  const [mouseDownClientX, setMouseDownClientX] = useState(0);
  const [mouseUpClientX, setMouseUpClientX] = useState(0);
  const [touchDownX, setTouchDownX] = useState(0);
  const [touchUpX, setTouchUpX] = useState(0);

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
    console.log("touchDownX : " + touchDownX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchUpX(e.changedTouches[0].pageX);
  };
  const onTouchEnd = () => {
    console.log("touchDownX : " + touchDownX);
    console.log("touchUpX : " + touchUpX);
    const distanceX = touchDownX - touchUpX;
    console.log("distanceX : " + distanceX);
    if (distanceX < -100 && num > 0) {
      setNum(num => num - 1);
    } else if (distanceX > 100 && num < images.length - 1) {
      setNum(num => num + 1);
    }
  };
  return {
    imageBox,
    num,
    setNum,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

export default useSlideImage;
