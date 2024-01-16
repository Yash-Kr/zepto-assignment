import React, { useState, useRef, useEffect } from "react";
import Chip from "./Chip";
import MenuList from "./MenuList";
import { USERS } from "../config/constants";

const ChipInputContainer = () => {
  const inputRef = useRef(null);
  const targetDivRef = useRef(null);

  /* -------------------   State Variables    -------------------- */
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserIds, setSelectedUserIds] = useState(new Set());
  const [menuOptions, setMenuOptions] = useState(USERS);
  const [backspaceClickCount, setBackspaceClickCount] = useState(0);

  /* -------------------   Utility Methods    -------------------- */
  const updateMenuOptions = (name = "") => {
    setMenuOptions(
      USERS.filter(
        (u) =>
          !selectedUserIds.has(u.uniqueId) &&
          u.name.toLowerCase().includes(name.toLowerCase())
      )
    );
  };

  const append_user_to_selected_list = (user = null) => {
    if (!user) return;
    selectedUserIds.add(user.uniqueId);
    const updated_list = [...selectedUsers];
    updated_list.push(user);
    setSelectedUsers(updated_list);
    updateMenuOptions();
    if (inputRef.current) inputRef.current.value = "";
  };

  const delete_user_from_selected_list = (user = null) => {
    if (!user) return;
    selectedUserIds.delete(user.uniqueId);
    setSelectedUsers(selectedUsers.filter((u) => u.uniqueId !== user.uniqueId));
    updateMenuOptions();
  };

  const delete_last_user_from_selected_list = () => {
    const last_user = selectedUsers[selectedUsers.length - 1];
    delete_user_from_selected_list(last_user);
  };

  const setInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setShowMenuOptions(true);
    }
  };

  const handleInputChange = () => {
    if (inputRef.current) updateMenuOptions(inputRef.current.value.trim());
    setShowMenuOptions(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      if (
        inputRef.current &&
        inputRef.current.value.trim().length === 0 &&
        backspaceClickCount === 1
      ) {
        delete_last_user_from_selected_list();
        setBackspaceClickCount(0);
      } else if (inputRef.current && inputRef.current.value.trim().length === 0)
        setBackspaceClickCount(1);
    }
  };

  const handleClickOutside = (event) => {
    if (targetDivRef.current && !targetDivRef.current.contains(event.target)) {
      setShowMenuOptions(false);
      setBackspaceClickCount(0);
    }
  };

  const canHighlightBackground = (index = -1) => {
    if (
      backspaceClickCount === 1 &&
      index === selectedUsers.length - 1 &&
      inputRef.current &&
      inputRef.current.value.trim().length === 0
    )
      return true;
    else return false;
  };

  useEffect(() => {
    setInputFocus();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex flex-row gap-4 p-4 flex-wrap border-b-2 border-blue-900 font-secondary"
      onClick={setInputFocus}
    >
      <h1 className="w-full my-10 text-violet-950 text-2xl text-center font-primary">Pick Users</h1>
      {selectedUsers.map((user, index) => (
        <Chip
          key={user.uniqueId}
          user={user}
          on_delete={delete_user_from_selected_list}
          className={canHighlightBackground(index) ? "bg-yellow-200" : ""}
        />
      ))}
      <div className="p-0 m-0 flex-1 relative min-w-80" ref={targetDivRef}>
        <input
          ref={inputRef}
          type="text"
          className="border-none bg-transparent focus:outline-none text-md md:text-lg w-full h-full"
          onChange={handleInputChange}
          onFocus={setInputFocus}
          onKeyDown={handleKeyPress}
          placeholder="Add new user..."
        />
        {showMenuOptions && (
          <MenuList
            users={menuOptions}
            on_select={append_user_to_selected_list}
          />
        )}
      </div>
    </div>
  );
};

export default ChipInputContainer;
