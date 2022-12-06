import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { ChatIcon, CommunityIcon, HomeIcon, MypageIcon } from "../assets/icons";

const FooterBar = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={classNames(
        "fixed z-40 bottom-0 w-[480px] sm:w-full h-[70px] bg-white border-2",
        { hidden: pathname === "/" || pathname === "/login" },
      )}
    >
      <div className="grid grid-cols-4 gap-x-4 justify-items-center mt-2">
        <Link to="/post">
          <HomeIcon />
        </Link>
        <Link to={`/chat`}>
          <ChatIcon />
        </Link>
        <Link to={`#`}>
          <CommunityIcon />
        </Link>
        <Link to={`/mypage`}>
          <MypageIcon />
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
