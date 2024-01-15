import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ users = [], on_select = () => {} }) => {
  const handleOnMenuItemClick = (index = -1) => {
    on_select(users[index]);
  };

  return (
    <div className="absolute top-[calc(100%+1.5rem)] min-w-44 border-2 max-h-56 overflow-y-scroll shadow-lg rounded-lg">
      {users.map((user, index) => (
        <MenuItem
          key={user.uniqueId}
          user={user}
          className={`${index === 0 ? "bg-gray-300" : ""} hover:bg-green-100`}
          onClick={() => handleOnMenuItemClick(index)}
        />
      ))}
      {users.length === 0 && (
        <span className="min-w-44 p-4 w-full text-red-800">
          No Matches Found !
        </span>
      )}
    </div>
  );
};

export default MenuList;
