import TEXTFieldWithPlaceHolderAndIcons from "../components/TEXTFieldWithPlaceHolderAndIcons";
import Link from 'next/link'

export default function SignIn(props: SignInProps) {
  return (
    <div
      className={`relative bg-white text-left w-[1512px] h-[982px] overflow-clip font-['Roboto']`}
      style={props.style}
    >
      <div className="h-52 absolute w-[250px] left-[631px] top-[70px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2e55d058ee7b92bb1b8524d3222aa61e376f9bff.webp)_center_/_cover]" />
      <div className="absolute bg-white w-[567px] h-[521px] left-[472px] top-[402px] drop-shadow-lg rounded-[10px]" />
      <p className="absolute font-normal text-black inline m-0 left-[45.44%] right-[45.44%] h-[27px] w-[138px] top-[45.82%] bottom-[51.43%] text-[38.54px] leading-[35.18446350097656px]">
        SIGN IN
      </p>
      <div>
              <input type="text" id="name" name="name" placeholder="    User ID" className="absolute gap-1.5 font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-[33.13%] right-[33.13%] top-[54.48%] bottom-[40.22%] border-solid outline rounded-md"/>
        </div>
        <div>
              <input type="text" id="password" name="password" placeholder="    Password" className="absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-[33.2%] right-[33.07%] top-[63.54%] bottom-[31.16%] outline rounded-md"/>

        </div>
      <div className="absolute text-white font-medium left-[33.13%] right-[33.13%] top-[75.87%] bottom-[18.84%] rounded-md">
        <div className="relative gap-2 w-[510px] h-[52px] bg-[rgba(82,101,235,1)] overflow-clip [box-shadow:0px_0px_0px_1px_rgba(82,_101,_235,_1)_inset] [box-shadow-width:1px] rounded-md">
          <p className="top-4 absolute leading-5 m-0 left-[205px] text-[25px]">
            <button>
            <Link href="NewCase">Continue</Link>
            </button>
          </p>
        </div>
      </div>
      <p className="absolute font-normal text-black inline m-0 h-[27px] w-[299px] left-[40.15%] right-[40.08%] top-[29.84%] bottom-[67.41%] text-[21.13px] leading-[35.18446350097656px]">
        JUDICIAL SERVICE OF GHANA
      </p>
    </div>
  );
}
SignIn.defaultProps = {
  className: "",
  style: {},
};
interface SignInProps {
  className: string;
  style: Object;
}
