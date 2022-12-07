import React from "react";

interface TPostInputProps {
  placeholder: string;
  val: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const PostInput = ({ placeholder, val, onChange }: TPostInputProps) => {
  return (
    <div className="flex items-center my-4">
      <input
        value={val}
        onChange={e => onChange(e.target.value)}
        className="w-full mx-6 px-4 placeholder-black bg-[#DDDBE9] h-12 rounded-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default PostInput;
