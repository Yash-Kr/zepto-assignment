import React from "react";

const MenuItem = ({ className = "", onClick, user = {} }) => {
  const getProfileImageUrl = () => {
    return `images/p${user.uniqueId}.jpg`;
  };

  return (
    <div
      className={`flex flex-row gap-4 items-center justify-start cursor-pointer py-2 px-4 ${className}`}
      onClick={onClick}
    >
      <img
        src={getProfileImageUrl()}
        alt="p1"
        className="w-8 h-auto rounded-full"
      />
      <span className="text-xs md:text-sm">{user.name}</span>
      <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
        {user.email}
      </span>
    </div>
  );
};

export default MenuItem;
