import React from "react";

export default function ActiveCase() {
  return (

<div className="flex relative mt-11 w-[356px] flex-grow rounded-[23px] bg-white pb-[38px] pl-[105px] pr-[110px] pt-[27px]">
<div className="flex h-full w-full flex-col gap-0">
  <div className="flex flex-col items-center gap-3">
    <p className="h-[19px] w-[141px] flex-grow text-xl font-semibold text-black">
      Mellisa Diaz
    </p>
    <p className="h-2.5 w-[114px] text-[10px] font-light text-[#A8A8A8]">
      Plaintiff
    </p>
    <p className="mt-20 h-2.5 w-[114px] text-[10px] font-light text-[#A8A8A8]">
      Defendant
    </p>
  </div>
  <p className="mt-[-41px] h-[19px] w-[141px] text-xl font-semibold text-black">
    Herbert Hardy
  </p>
</div>
<div className="absolute left-[37px] top-[22px] flex h-[159px] w-[57px] flex-col items-center justify-between gap-[45px]">
  <div className="bg-ellipse-10x h-[57px] w-[57px] rounded-full bg-cover bg-center" />
  <div className="bg-ellipse-11x h-[57px] w-[57px] rounded-full bg-cover bg-center" />
</div>
</div>

);
}
ActiveCase.defaultProps = {
  className: "",
  style: {},
};