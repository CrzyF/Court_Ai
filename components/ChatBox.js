import React, {useState, useEffect} from "react";
import { db, auth } from "../config/firebase";
import { query, collection, orderBy, onSnapshot, limit, addDoc, serverTimestamp} from "firebase/firestore";
import Message from './Message'
import useSpeechRecognition from '@/hooks/useSpeechRecognitionHooks'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneLines, faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons'

function ChatBox() {
    const [messages, setMessages] = useState([])

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


      const {text, isListening, hasRecognitionSupport, startListening, stopListening} = useSpeechRecognition();


  return (
<div className="font-roboto flex h-screen w-full font-normal">

  <div className="absolute pr-5 bottom-10 z-40">
    <div className="w-full max-w-sm px-4">
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? '' : 'text-opacity-90'}
              group inline-flex items-center rounded-md bg-[#5265EB] px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span><FontAwesomeIcon icon={faMicrophoneLines} /></span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-[1]"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="origin-top bottom-12 w-[300px] max-w-sm -translate-x-[1/2] transform px-6 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="flex-row grid gap-8 bg-white p-7">
                  <div className="-m-3 flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-[#ededed] focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <button onClick={startListening} className="text-sm font-medium text-gray-900">
                      <FontAwesomeIcon icon={faCirclePlay} className='text-[#32CD32] scale-150 pr-5 pl-2' />
                      <a> Start Voice Recognition </a>
                    </button>
                  </div>
                </div>
                <div className="flex-row grid gap-8 bg-white p-7">
                  <div className="-m-3 flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-[#ededed] focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                    <button onClick={stopListening} className="text-sm font-medium text-gray-900">
                      <FontAwesomeIcon icon={faCircleStop} className='text-[#FF0000] scale-150 pr-5 pl-2' />
                      <a> Stop Voice Recognition </a>
                    </button>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
    </div>
  </div>

  <div className="h-screen w-full flex-col gap-4">
    <div className="flex flex-col items-end">
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>

    <div>
    <div>
    {hasRecognitionSupport ? (
      <>
        {isListening ? (
          <div className="flex flex-col items-end">
          <div className="chat-bubble">
            <div className="chat-bubble__right h-fit w-fit rounded-l-[67px] rounded-tr-[25px] bg-[#00d15a] pl-5 pt-2 pb-[20px] text-[19.54px] leading-[35.18px] text-white pr-5">
              <p className="user-message">Listening...</p>
            </div>
          </div>
          </div>
        ) : null}

        {isListening !== null && (
          <div className="flex flex-col items-end">
          <div className="chat-bubble">
            <div className="chat-bubble__right h-fit w-fit rounded-l-[67px] rounded-tr-[25px] bg-[#00d15a] pl-5 pt-2 pb-[20px] text-[19.54px] leading-[35.18px] text-white pr-5">
              <p className="user-message">{text}</p>
            </div>
          </div>
          </div>
        )}
      </>
    ) : (
      <h1>Oops... looks like your browser does not support Voice Recognition</h1>
    )}
  </div>
    </div>
  </div>
</div>

        
      );
    }


ChatBox.defaultProps = {
  className: "",
  style: {},
};

export default ChatBox
