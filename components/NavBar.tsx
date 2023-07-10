import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGavel, faServer, faGears, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import TrySwitch from "./TrySwitch"
import Link from "next/link";
import { auth } from '../config/firebase'



export default function NavBar() {

  return (
    <div
      className={`font-inter flex h-screen w-64 pl-3 items-center justify-center text-left font-medium text-white scale-90`}
    >
      <div className="relative flex h-full w-full items-end justify-end rounded-[47px] bg-[#2A3CA0] pb-[688px] pl-8 pr-[30px] pt-[23px]">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <div className="bg-ellipse-9x h-[70px] w-[70px] rounded-full bg-cover bg-center pb-[173px] pl-[173px] scale-75" />
          <p className="h-[31px] w-[194px] text-[27px] pb-[173px]">Margaret Reed</p>
        </div>
        <div className="absolute bottom-[338px] right-[59px] flex h-[223px] w-[105px] flex-col gap-[33px] pt-[23px]">
          <button><p className="h-[31px] w-[105px] flex-grow text-xl">Dashboard</p></button>
          <button><p className="h-[31px] w-[105px] flex-grow text-xl pr-14">Case</p></button>
          <button><p className="h-[31px] w-20 flex-grow text-xl">Records</p></button>
          <button><p className="h-[31px] w-20 flex-grow text-xl">Settings</p></button>
        </div>

        <div className="absolute bottom-[343px] left-[39px] flex h-[220px] w-[39px] flex-col gap-8 pt-[20px]">
        <button><FontAwesomeIcon icon={faChartLine} className="mt-[6px] h-6 w-6"/></button>
        <button><FontAwesomeIcon icon={faGavel} className="mt-[6px] h-6 w-[30px]"/></button>
        <button><FontAwesomeIcon icon={faServer} className="mt-[6px] h-6  w-[30px]"/></button>
        <button><FontAwesomeIcon icon={faGears} className="mt-[3px] h-6 w-[29px]" /></button>
        </div>
        <button onClick={() => auth.signOut}>

        <FontAwesomeIcon icon={faArrowRightFromBracket} className="absolute bottom-[45px] left-[45px] h-6 w-[27px]"/>
        <p className="absolute inset-x-0 bottom-10 mx-auto h-[31px] w-20 text-xl">
          Logout
        </p>
        </button>


        <div className="absolute bottom-[196px] right-[135px] h-[10px] w-[52px]">
        <TrySwitch/>
        </div>
      </div>
    </div>
  );
}
NavBar.defaultProps = {
  className: "",
  style: {},
};
