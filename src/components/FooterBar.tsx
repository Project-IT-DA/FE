import { Link } from "react-router-dom";

const FooterBar = () => {
  return (
    <div className="fixed z-40 bottom-0 w-[480px] h-[70px] bg-gray-300">
      <div className="grid grid-cols-4 gap-x-4 justify-items-center ">
        <Link to={`#`}>
          <div className="bg-blue-300">메인</div>
        </Link>
        <Link to={`#`}>
          <div className="bg-blue-300">메인</div>
        </Link>
        <Link to={`#`}>
          <div className="bg-blue-300">메인</div>
        </Link>
        <Link to={`#`}>
          <div className="bg-blue-300">메인</div>
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
