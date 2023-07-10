import React, {useState, useEffect} from "react";
import { db, auth } from "../config/firebase";
import { query, collection, orderBy, onSnapshot, limit, addDoc, serverTimestamp } from "firebase/firestore";
import Message from './Message'
import Textarea from "./Textarea";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox"

const Chat = () => {

  const [messages, setMessages] = useState([])

  const [message, setMessage] = useState("");


  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

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
    
<div className="font-roboto flex flex-col h-screen justify-between overflow-hidden bg-white">
  <div className="top-0">
    <ChatHeader />
  </div>

  <div className="flex-grow overflow-hidden">
    <ChatBox />
  </div>

  <div className="bottom-0 fixed pl-[100px]">
    <Textarea />
  </div>
</div>


  );
}

export default Chat
