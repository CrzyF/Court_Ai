import React from "react";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    
<div className={`chat-bubble ${message.uid === user.uid ? "right" : ""} mb-4`}>
  <div className="flex flex-col">
    <div className="flex items-start mb-2">
      <div className="chat-bubble bg-[#00d15a] text-white rounded-l-[67px] rounded-tr-[25px] py-[10px] px-[15px]">
        <p className="user-message text-[16px]">{message.text}</p>
      </div>
    </div>
    <div className="flex justify-end text-[12px] text-gray-500">
      <img src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/7b1e845e5e371594385e612c622869353a4556b8.webp" alt="Sender" className="w-8 h-6 rounded-full mr-1" />
      {message.createdAt.toDate().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
    </div>
  </div>
</div>



  );
};

export default Message; 