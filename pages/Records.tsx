import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faEllipsis, faHouseChimney, faBarsProgress, faChartLine, faGears, faBars, faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Clock from 'react-live-clock'
import Link from 'next/link';
import Script from 'next/script'

export default function Records(props: RecordsProps) {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  <Clock
  format={'h:mm:ss A'}
  style={{fontSize: '1.5em'}}
  blinking={true}
  ticking={true} />


  return (

    <div
      className={`relative bg-white w-[1512px] h-[982px] overflow-clip font-['Roboto']`}
      style={props.style}
    >
      <div>
        <div className="w-3 h-3 absolute left-[861px] top-[970px]" />
      </div>
      <div>
        <div className="origin-top-left h-0 absolute w-[982px] left-[115px] top-[-17px] outline outline-1 outline-[rgba(210,215,218,1)] [rotate:90deg]" />
      </div>
      <div>
        <div className="origin-top-left h-0 absolute w-[982px] left-[512px] top-[-17px] outline outline-1 outline-[rgba(210,215,218,1)] [rotate:90deg]" />
      </div>
      <div>
        <div className="h-0 absolute w-[397px] left-[115px] top-[104px] outline outline-1 outline-[rgba(210,215,218,1)]" />
      </div>
      <div>
        <div className="left-0 absolute bg-white w-[115px] h-[982px] top-[-17px]" />
      </div>

      <div>
        <div className="absolute bg-white w-[397px] h-[121px] left-[115px] top-[-17px]" />
      </div>
      <button className="absolute left-[40px] top-[31px] text-[rgba(210,215,218,1)] scale-150">

      <div className="absolute hover:text-[rgba(15,173,254,255)]">

        <FontAwesomeIcon icon={faBars} />

       </div>

      </button>
      <div className="text-black text-left font-normal">

      <button className="absolute w-[389px] h-[60px] left-[117px] top-[27px] bg-[rgba(15,173,254,255)] rounded-[10px]">
      <div className="text-white text-left font-medium">
        <button className="h-5 absolute w-[148px] left-[75px] top-[6px]">
          <p className="h-5 absolute w-[218px] text-[20.72px] leading-[29.440059661865234px]">
           Register New Case
          </p>
        </button>
        <button className="absolute text-white left-[324px] top-[19px] scale-150">
        <FontAwesomeIcon icon={faFileCirclePlus} />
        </button>
      </div>
      </button>

      </div>
      <button className="absolute text-[rgba(210,215,218,1)] hover:text-[rgba(15,173,254,255)]">
      <div className="absolute left-[38px] top-[236px] scale-125">
      <FontAwesomeIcon icon={faHouseChimney} />
      </div>
      <p className="absolute text-white hover:text-[rgba(15,173,254,255)] text-m left-[29px] top-[266px]">
        Home
      </p>
      </button>
      <button className="absolute text-[rgba(15,173,254,255)] hover:text-[rgba(15,173,254,255)]">
      <Link href="Records">
      <div className="absolute left-[38px] top-[336px] scale-125">

      <FontAwesomeIcon icon={faBarsProgress} />
      </div>
      <p className="absolute text-[rgba(15,173,254,255)] hover:text-[rgba(15,173,254,255)] text-m left-[20px] top-[366px]">
        Records
      </p>
      </Link>
      </button>
      <button className="absolute text-[rgba(210,215,218,1)] hover:text-[rgba(15,173,254,255)]">
      <div className="absolute left-[38px] top-[436px] scale-125">
      <FontAwesomeIcon icon={faChartLine} />
      </div>
      <p className="absolute text-white hover:text-[rgba(15,173,254,255)] text-m left-[13px] top-[466px]">
      Dashboard
      </p>
      </button>

      <button className="absolute text-[rgba(210,215,218,1)] hover:text-[rgba(15,173,254,255)]">
      <div className="absolute left-[38px] top-[536px] scale-125">
      <FontAwesomeIcon icon={faGears} />
      </div>
      <p className="absolute text-white hover:text-[rgba(15,173,254,255)] text-m left-[23px] top-[566px]">
      Settings
      </p>
      </button>

      <div>
        <div className="h-36 absolute bg-white w-[1000px] left-[512px] top-[821px]" />
      </div>
      <div>
        <div className="absolute w-[1000px] h-[728px] left-[512px] top-[104px] bg-[rgba(247,248,250,1)]" />
      </div>
      <div className="text-black font-normal">
        <div className="absolute w-[1000px] h-[121px] left-[512px] top-[-17px]">
          <div className="inset-0 absolute bg-white w-[1000px]" />
          <p className="h-6 absolute text-center inline m-0 w-[80.42px] left-[1.8%] right-[90.16%] top-[39.67%] bottom-[40.5%] text-[17.54px] leading-[35.18446350097656px]">
            Docket #3
          </p>
          <p className="h-6 absolute text-left inline m-0 w-[110px] left-[27.8%] right-[61.2%] top-[39.67%] bottom-[40.5%] text-[29.54px] leading-[35.18446350097656px]">
            Samuel
          </p>
          <p className="h-6 absolute text-left inline m-0 w-[30.27px] left-[48.44%] right-[48.53%] top-[39.67%] bottom-[40.5%] text-[29.54px] leading-[35.18446350097656px]">
            vs
          </p>
          <p className="h-6 absolute text-left inline m-0 w-[148px] left-[64.4%] right-[20.8%] top-[39.67%] bottom-[40.5%] text-[29.54px] leading-[35.18446350097656px]">
            Marcia
          </p>
          <div className="absolute font-bold  font-['Roboto'] text-gray-400 transition-all left-[40.440%] top-[73.50%]  w-full h-[92px]">
                  Hearing on {date}
           </div>

        <button className="absolute text-[rgba(210,215,218,1)] hover:text-[rgba(15,173,254,255)] scale-125 left-[88.4%] top-[45.67%]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>

        </div>
      </div>
      <div className="absolute">
      <div>
        <div className="h-28 absolute bg-white w-[398px] left-[115px] top-[103px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[127px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #1
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[134px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[154px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="absolute rounded-tl-[20px] rounded-tr-[20px] w-[445px] h-[169px] left-[1050px] top-[562px] bg-[rgba(15,173,254,255)] rounded-bl-[20px] [box-shadow:0px_0px_0px_1px_white_inset] [box-shadow-width:1px]">
        <div className="absolute" />
      </div>
      <div className="text-black text-left font-light">
        <div className="h-5 absolute w-[57px] left-[984px] top-[710px]">
          <p className="inset-0 h-5 absolute m-0 w-[57px] text-[12.72px] leading-[29.440059661865234px]">
          <Clock/>
          </p>
        </div>
        <p className="absolute text-white text-xl nset-y-0 h-5 right-0 inline m-0 w-[445px] left-[1065px] text-[12.72px] leading-[29.440059661865234px] top-[600px] w-">
          Court Session has began.
        </p>
      </div>
    </div>
      <div>
        <div className="absolute rounded-full w-[60px] h-[60px] left-[972px] top-[644px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div className="text-black text-left font-light">
        <p className="h-5 absolute m-0 w-[43px] left-[222px] top-[802px] text-[12.72px] leading-[29.440059661865234px]">
          Samuel
        </p>
      </div>
      <div className="text-black text-left font-light">
        <p className="h-5 absolute m-0 w-[15px] left-[277px] top-[802px] text-[12.72px] leading-[29.440059661865234px]">
          Vs
        </p>
      </div>
      <div className="text-black text-left font-light">
        <p className="h-5 absolute m-0 w-[62px] left-[304px] top-[802px] text-[12.72px] leading-[29.440059661865234px]">
          Emmanuel
        </p>
      </div>
      <div>
        <div className="h-28 absolute bg-white w-[398px] left-[115px] top-[214px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[259px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[236px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #2
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[250px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <div className="h-28 absolute w-[398px] left-[115px] top-[324px] bg-[rgba(15,173,254,255)] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-white text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[372px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Marcia
          </p>
        </div>
      </div>
      <div className="text-white text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[345px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #3
        </p>
        <button className="absolute text-white scale-125 left-[442px] top-[359px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <div className="h-28 absolute bg-white w-[398px] left-[114px] top-[434px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[478px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[451px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #4
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[459px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <div className="h-28 absolute bg-white w-[398px] left-[114px] top-[541px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[587px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[560px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #4
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[569px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <div className="h-28 absolute bg-white w-[398px] left-[115px] top-[647px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[696px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[673px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #5
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[679px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <div className="h-28 absolute bg-white w-[398px] left-[115px] top-[758px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[802px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[779px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #6
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[789px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <div>
        <div className="h-24 absolute bg-white w-[398px] left-[115px] top-[869px] [box-shadow:0px_0px_0px_1px_rgba(210,_215,_218,_1)_inset] [box-shadow-width:1px]" />
      </div>
      <div className="text-black text-left font-light">
        <div className="w-36 h-5 absolute left-[222px] top-[909px]">
          <p className="inset-y-0 h-5 left-0 absolute inline m-0 w-[43px] right-[70.14%] text-[12.72px] leading-[29.440059661865234px]">
            Samuel
          </p>
          <p className="inset-y-0 h-5 absolute inline m-0 w-[15px] left-[38.19%] right-[51.39%] text-[12.72px] leading-[29.440059661865234px]">
            Vs
          </p>
          <p className="inset-y-0 h-5 right-0 absolute inline m-0 w-[62px] left-[56.94%] text-[12.72px] leading-[29.440059661865234px]">
            Emmanuel
          </p>
        </div>
      </div>
      <div className="text-black text-left font-normal">
        <p className="h-5 absolute m-0 w-[153px] left-[222px] top-[891px] text-[24.72px] leading-[29.440059661865234px]">
          Docket #7
        </p>
        <button className="absolute text-[rgba(15,173,254,255)] scale-125 left-[442px] top-[901px]">
        <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </div>
      <button>
        <div className="absolute w-[758px] h-[60px] left-[662px] top-[870px] bg-[rgba(15,173,254,255)] rounded-[20px]" />
      <div className="text-white text-left font-medium">
        <div className="h-5 absolute w-[148px] left-[967px] top-[885px]">
          <p className="inset-0 h-5 absolute m-0 w-[148px] text-[25.72px] leading-[29.440059661865234px]">
            Tap to speak
          </p>
        </div>
      </div>
      </button>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[120px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[228px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[336px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[446px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[548px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[660px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[766px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
      <div>
        <div className="absolute rounded-full w-[69px] h-[69px] left-[137px] top-[880px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3d0446022f4d25960fff907bedf932d5aa3bd3f5.webp)_center_/_cover]" />
      </div>
    </div>
  );
}
Records.defaultProps = {
  className: "",
  style: {},
};
interface RecordsProps {
  className: string;
  style: Object;
}
