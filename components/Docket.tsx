import React from "react";

export default function Docket() {
  return (

<div className="flex h-full w-full items-center justify-between gap-[11px]">
  <div className="bg-ellipse-12x h-[57px] w-[57px] rounded-full bg-cover bg-center" />
  <p className="h-[19px] w-[116px] flex-grow text-xl">Docket #1</p>
</div>

);
}
Docket.defaultProps = {
  className: "",
  style: {},
};