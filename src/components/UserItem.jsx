import React from "react";

function UserItem({ name, IconUser, classname }) {
  return (
    <div
      className={`nav flex items-center gap-3 text-[16px] font-semibold cursor-pointer  decoration-4 ease-in-out hover:opacity-100 underline-offset-8 mb-3 text-white ${classname}`}
    >
      <IconUser />
      <h2>{name}</h2>
    </div>
  );
}

export default UserItem;
