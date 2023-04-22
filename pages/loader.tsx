import TablerLoaderQuarter from "../assets/TablerLoaderQuarter";
export default function Loader(props: LoaderProps) {
  return (
    <div
      className={`relative bg-white text-left w-[1512px] h-[982px] overflow-clip font-['Roboto']`}
      style={props.style}
    >
      <div className="h-52 absolute w-[250px] left-[631px] top-[70px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2e55d058ee7b92bb1b8524d3222aa61e376f9bff.webp)_center_/_cover]" />
      <p className="absolute font-normal text-black inline m-0 h-[27px] w-[299px] left-[40.08%] right-[40.15%] top-[32.08%] bottom-[65.17%] text-[21.13px] leading-[35.18446350097656px]">
        JUDICIAL SERVICE OF GHANA
      </p>
      <p className="absolute font-normal text-black inline m-0 h-[27px] w-[129px] left-[45.7%] right-[45.77%] top-[87.07%] bottom-[10.18%] text-[21.13px] leading-[35.18446350097656px]">
        Powered By
      </p>
      <p className="flex-1 absolute font-semibold inline m-0 left-[44.05%] right-[44.05%] top-[91.85%] bottom-[4.48%] text-[23.46px] leading-[35.18446350097656px] text-[rgba(85,2,33,1)]">
        DATA & BEYOND
      </p>
      <TablerLoaderQuarter />
    </div>
  );
}
Loader.defaultProps = {
  className: "",
  style: {},
};
interface LoaderProps {
  className: string;
  style: Object;
}
