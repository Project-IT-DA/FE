import React, { useState, useRef, Dispatch, SetStateAction } from "react";

const useSlideImage = () => {
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
  return {
    imageBox,
    num,
    setNum,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchEnd,
  };
};

export default useSlideImage;
