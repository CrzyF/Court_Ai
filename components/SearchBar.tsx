import React from "react";
import Ellipse17 from "../assets/Ellipse17";

export default function SearchBar() {
  return (
        <div className="flex h-full w-full flex-col items-center">
          <div className="h-[50px] w-full rounded-[67px] bg-white pb-5 pl-[45px] pr-[234px] pt-3 font-medium text-[#DCDCDC]">
            <input type="text" id="text" name="text" placeholder="Search..." className="h-[18px] w-[80px] text-lg border-none outline-none"/>
          </div>
        </div>
          );
}
SearchBar.defaultProps = {
  className: "",
  style: {},
};