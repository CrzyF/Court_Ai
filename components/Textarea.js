import React, {useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faMicrophone, faPodcast } from "@fortawesome/free-solid-svg-icons";
import { db, auth } from "../config/firebase";
import { query, collection, orderBy, onSnapshot, limit, addDoc, serverTimestamp } from "firebase/firestore";


const Textarea = () => {

  const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
          alert("Enter valid message");
          return;
        }
        const { uid } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
          text: message,
          createdAt: serverTimestamp(),
          uid,
        });
        setMessage("");
      };


  return (

    <div className={`flex h-full w-fit items-center justify-center`} >
      <div className="flex h-full w-full justify-center pb-[29px]">
        <div className="flex h-full w-full flex-col items-center justify-between gap-[21px]">
          <div className="h-0 w-full outline outline-0 outline-[#DCDCDC]" />
          <div className="flex items-center justify-between gap-[36px]">
            <div className="flex h-full w-full flex-grow items-center rounded-[67px] py-[9px] pr-[536px] [box-shadow-width:3px] [box-shadow:0px_0px_0px_3px_rgba(122,_135,_216,_1)_inset]">
            <form className="send-message" onSubmit={(event)=> sendMessage(event)}>
              <div className="flex h-[50px] w-[50px] items-center rounded-[67px] justify-end bg-tranparent py-[15px] pl-[15px] pr-3">
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tap to speak or type message..." className="absolute text-[#AAAAAA] left-[25%] w-[62%] outline-none"></input>
              <div className="absolute right-0.5 h-[65px] w-20 items-center rounded-[67px] bg-[#C3CBF2] pl-6 pr-[13px] pt-[15px] [box-shadow-width:3px] [box-shadow:0px_0px_0px_3px_rgba(122,_135,_216)_inset]">
              <button type="submit" >
              <FontAwesomeIcon icon={faPaperPlane} className="h-7 w-7 pr-3.5 pt-1 right-1 text-[#5265EB]"/>
              </button>
              </div>
            </div>
            </form>
          </div>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default Textarea
