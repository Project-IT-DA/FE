import { useState } from "react";

const useCategoryPick = () => {
  const [picks, setPicks] = useState("");

  const categoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setPicks(e.target.value);
    console.log(1);
  };

  return [picks, categoryHandler];
};

export default useCategoryPick;
