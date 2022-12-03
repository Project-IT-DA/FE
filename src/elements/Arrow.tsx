import arrow from "../assets/icons/arrow.png";
import { Inum } from "../types/numType";

const Arrow = ({ num, setNum }: Inum) => {
  const handleNum = () => {
    num < 2 ? setNum(num => num + 1) : null;
  };
  return (
    <>
      <img
        src={arrow}
        className="absolute w-10 top-[50%] left-[85%] cursor-pointer"
        onClick={handleNum}
      ></img>
    </>
  );
};

export default Arrow;
