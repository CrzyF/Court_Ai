import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import Clock from 'react-live-clock'



export default function NewCase(props: NewCaseProps) {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  <Clock
  format={'h:mm:ss A'}
  style={{fontSize: '1.5em'}}
  blinking={true}
  ticking={true} />


  return (
    <div
      className={`relative bg-white text-left w-screen h-screen overflow-clip font-['Roboto']`}
      style={props.style}
    >
      <div className="absolute bg-white w-[567px] h-[848px] left-[443px] top-[67px] drop-shadow-lg rounded-[10px]" />
      <div className="absolute left-[33.13%] right-[33.13%] top-[10.29%] bottom-[10.39%]">
        <div className="text-black font-normal">
          <p className="absolute m-0 left-[29.02%] right-[29.02%] h-[27px] w-[214px] top-[-1.8%] bottom-[98.33%] text-[38.54px] leading-[35.18446350097656px]">
            New Case
          </p>
        </div>

        <div>

        <div className="absolute text-right top-[10%] w-full h-[52px] left-0">
        <Dropdown/>
        </div>

        

        <input type="text" id="attorney1" name="name" placeholder="    Attorney #1" className="absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-0 right-[33.13%] top-[22%] border-black outline w-full h-[52px] rounded-md"/>

        <input type="text" id="attorney2" name="name" placeholder="    Attorney #2" className="absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-0 right-[33.13%] top-[33%] border-black outline w-full h-[52px] rounded-md"/>

        <input type="text" id="docket" name="name" placeholder="    Docket Number" className="absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-0 right-[33.13%] top-[43%] border-black outline w-full h-[52px] rounded-md"/>

        <input type="text" id="plaintiff" name="name" placeholder="    Name of Plaintiff" className="absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-0 right-[33.13%] top-[53%] border-black outline w-full h-[52px] rounded-md"/>

        <input type="text" id="defendant" name="name" placeholder="    Name of Defendant" className="absolute gap-1.5 text-left font-normal font-['Roboto'] text-[rgba(168,168,168,1)] transition-all left-0 right-[33.13%] top-[63%] border-black outline w-full h-[52px] rounded-md"/>

        </div>

        


        <div className="text-white font-medium">
          <div className="inset-x-0 absolute bottom-0 top-[93.32%] rounded-[3px]">
            <div className="relative gap-2 w-[510px] h-[52px] bg-[#5265EB] overflow-clip rounded-md">
              <p className="top-4 absolute leading-5 m-0 left-[40%] text-[25px]">
              <Link href="courtsession">Proceed</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-normal text-black inline m-0 h-[27px] w-[76px] left-[7.41%] right-[87.57%] top-[8.76%] bottom-[88.49%] text-[29.54px] leading-[35.18446350097656px]">
      <Link href="courtsession">Back</Link>
      </p>

      <button className="absolute font-normal text-black inline m-0 h-[27px] w-[76px] left-[3.41%] right-[87.57%] top-[8.50%] bottom-[88.49%] text-[29.54px] leading-[35.18446350097656px">
      <Link href="courtsession">
      <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      </button>

      <div className="absolute gap-1.5 font-bold  font-['Roboto'] text-black transition-all left-[33%] top-[73.50%]  w-full h-[92px]">

      {date}
      </div>

      <div className="absolute gap-1.5 font-bold  font-['Roboto'] text-black transition-all left-[63%] top-[73.50%]   w-full h-[92px]">
      <Clock/>
      </div>


    </div>
  );
}
NewCase.defaultProps = {
  className: "",
  style: {},
};
interface NewCaseProps {
  className: string;
  style: Object;
}
