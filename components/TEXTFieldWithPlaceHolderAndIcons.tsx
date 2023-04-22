export default function TEXTFieldWithPlaceHolderAndIcons(
    props: TEXTFieldWithPlaceHolderAndIconsProps
  ) {
    return (
      <>
        <div
          className={`absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all ${
            props.type === "TYPE"
              ? "left-[33.13%] right-[33.13%] top-[54.48%] bottom-[40.22%]"
              : ""
          } ${
            props.type === "TYPE1"
              ? "left-[33.2%] right-[33.07%] top-[63.54%] bottom-[31.16%]"
              : ""
          }`}
        >
          <div className="w-full gap-1.5">
            <div className="px-3.5 py-2.5 w-full bg-white border-solid border gap-2 flex items-center self-stretch h-[52px] border-[rgba(224,224,224,1)] overflow-clip rounded-[3px]">
              <div className="flex-1 gap-2 flex items-center flex-grow">
                <p className="flex-1 text-base leading-6 m-0">{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  TEXTFieldWithPlaceHolderAndIcons.defaultProps = {
    className: "",
    type: "TYPE",
    text: "User ID",
  };
  interface TEXTFieldWithPlaceHolderAndIconsProps {
    className: string;
    type: "TYPE" | "TYPE1";
    text: string;
  }
  
  