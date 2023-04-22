export default function Vector1(props: Vector1Props) {
  return (
    <div>
      <div className="absolute left-[3.04%] right-[95.5%] top-[37.17%] bottom-[60.59%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 12.222 7.333 V 0 H 22 V 7.333 H 12.222 Z M 0 12.222 V 0 H 9.778 V 12.222 H 0 Z M 12.222 22 V 9.778 H 22 V 22 H 12.222 Z M 0 22 V 14.667 H 9.778 V 22 H 0 Z"
            fill="#D2D7DA"
          />
        </svg>
      </div>
    </div>
  );
}
Vector1.defaultProps = {
  className: "",
};
interface Vector1Props {
  className: string;
}
