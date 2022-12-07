import { ArrowUpIcon } from "../assets/icons";

interface toggleProps {
  categoryTg: boolean;
  setCategoryTg: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArrowUpToggle = ({ categoryTg, setCategoryTg }: toggleProps) => {
  return (
    <ArrowUpIcon
      className={`w-4 h-4 mt-[2px] cursor-pointer ${
        categoryTg ? "transfrom rotate-180" : "transform rotate-0 "
      } ease-out duration-300`}
      onClick={() => setCategoryTg(!categoryTg)}
    />
  );
};

export default ArrowUpToggle;
