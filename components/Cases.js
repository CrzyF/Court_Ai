import React,{ useState, useEffect} from "react";
import { db, auth } from "../config/firebase";
import { query, collection, orderBy, onSnapshot, limit, addDoc, serverTimestamp} from "firebase/firestore";
import SearchBar from "./SearchBar";
import ActiveCase from "./ActiveCase";
import Docket from "./Docket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

 function Cases() {

  return (
<div className="font-inter relative h-[982px] w-[463px] pl-[51px] pr-[55px] pt-[142px] text-left">
  <div className="flex h-full w-full flex-col items-center">
    <div className="font-medium text-black">
      <p className="absolute left-12 top-[30px] h-[31px] w-[294px] text-[45px]">
        Case
        <button>
          <Link href="NewCase">
            <FontAwesomeIcon
              icon={faFolderPlus}
              className="absolute h-10 w-10 left-[300px] bottom-[1px] top-[15px] text-[#5265EB] hover:text-[#2A3CA0]"
            />
          </Link>
        </button>
      </p>
    </div>
    <div className="flex flex-col">
      <SearchBar />
      <ActiveCase />
    </div>
    <div className="mt-[-111px] h-px w-[355px] outline outline-1 outline-[#D2D7DA]" />
    <div className="mt-[134px]">
      <div className="h-[86px] w-[356px] rounded-[23px] bg-white pb-[17px] pl-[33px] pr-[139px] pt-3 font-semibold text-black">
        <Docket />
      </div>

    </div>
  </div>
</div>

  );
}
Cases.defaultProps = {
  className: "",
  style: {},
};

export default Cases
