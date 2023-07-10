import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ChatHeader() {
  return (
    <div
      className={`font-roboto flex h-[116px] w-[791px] items-center justify-center font-normal text-black `}>
      <div className="relative flex h-full w-full items-center justify-end bg-white py-11 pl-[210px] pr-[105px]">
        <div className="flex h-full w-full items-center gap-[42px] text-left">
          <p className="h-6 w-[164px] text-[29.54px] leading-[35.18px]">
            Mellisa Diaz
          </p>
          <p className="h-6 w-[30px] text-[29.54px] leading-[35.18px]">vs</p>
          <p className="ml-[11px] h-7 w-[185px] text-[29.54px] leading-[35.18px]">
            Herbert Hardy
          </p>
        </div>
        <div className="absolute bottom-[19px] left-6 flex h-[57px] w-[136px] justify-between gap-2 text-center">
          <div className="bg-ellipse-12x h-[47px] w-[57px] rounded-full bg-cover bg-center" />
          <div className="flex flex-grow flex-col items-center justify-between gap-[15px]">
            <p className="h-[15px] w-[81px] text-[15.48px] leading-[18.71px]">
              Docket #1
            </p>
            <p className="h-[15px] w-[71px] text-[15.48px] leading-[18.71px]">
              11/04/23
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 mx-auto h-0 w-[791px] outline outline-1 outline-[#DCDCDC]" />
       <button>
        <Link href={'Description'}>
      <FontAwesomeIcon icon={faBars} className="absolute bottom-[40px] right-[39px] h-6 w-6 text-[#AAAAAA] hover:text-[#2A3CA0]"/>
      </Link>
       </button>
      </div>
    </div>
  );
}
ChatHeader.defaultProps = {
  className: "",
  style: {},
};
export default ChatHeader
