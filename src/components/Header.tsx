import classNames from "classnames";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={classNames("border-b pb-4", {
        hidden: pathname === "/" || pathname == "/login",
      })}
    >
      <img src="/images/Logo.png" className="w-[60px] mt-4 ml-4" />
    </div>
  );
};
