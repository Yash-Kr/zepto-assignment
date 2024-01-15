import React from "react";
import { RxCross2 } from "react-icons/rx";

const Chip = ({ user = {}, on_delete = () => {}, className = "" }) => {
  const getProfileImageUrl = () => {
    return `images/p${user.uniqueId}.jpg`;
  };

  return (
    <div
      className={`flex flex-row gap-2 py-[2px] px-[3px] items-center border-2 rounded-3xl shadow-md bg-white ${className}`}
    >
      <img
        src={getProfileImageUrl()}
        alt="p1"
        className="w-6 md:w-8 h-auto rounded-full"
      />
      <span className="text-xs md:text-md">{user.name}</span>
      <span className="cursor-pointer" onClick={() => on_delete(user)}>
        {" "}
        <RxCross2 className="w-auto h-5" />
      </span>
    </div>
  );
};

export default Chip;
