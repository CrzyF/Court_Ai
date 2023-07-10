import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
<div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
  <div className="flex flex-col">
    <div className="flex items-start mb-4">
      <div className="chat-bubble bg-[#00d15a] text-white rounded-l-[67px] rounded-tr-[25px] py-[10px] px-[15px]">
        <p className="user-name text-[14px] font-semibold">{message.name}</p>
        <p className="user-message text-[16px]">{message.text}</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Message; 