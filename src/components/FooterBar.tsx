import { Link } from "react-router-dom";
import { ChatIcon, CommunityIcon, HomeIcon } from "../assets/icons";

const FooterBar = () => {
  return (
    <div className="fixed z-40 bottom-0 w-[480px] h-[70px] bg-white border">
      <div className="grid grid-cols-4 gap-x-4 justify-items-center mt-2">
        <Link to={`#`}>
          <div>
            <HomeIcon />
          </div>
        </Link>
        <Link to={`#`}>
          <div>
            <ChatIcon />
          </div>
        </Link>
        <Link to={`#`}>
          <div>
            <CommunityIcon />
          </div>
        </Link>
        <Link to={`#`}>
          <div className="bg-blue-300">메인</div>
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
