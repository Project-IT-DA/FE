import React from "react";

const FullScreenCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="absolute top-0 z-[99] w-full h-screen bg-black">
      <button className="absolute top-5 right-5 text-gray-300 border-2 border-gray-300 py-1 px-2 rounded-lg">
        X
      </button>
      <div className="h-screen flex items-center">{children}</div>
    </div>
  );
};

export default FullScreenCarousel;
