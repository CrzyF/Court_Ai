export default function Vector5(props: Vector5Props) {
  return (
    <div>
      <div className="absolute left-[2.84%] right-[95.7%] top-[4.07%] bottom-[94.4%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 14.667 H 22 V 12.222 H 0 V 14.667 Z M 0 8.556 H 22 V 6.111 H 0 V 8.556 Z M 0 0 V 2.444 H 22 V 0 H 0 Z"
            fill="#D2D7DA"
          />
        </svg>
      </div>
    </div>
  );
}
Vector5.defaultProps = {
  className: "",
};
interface Vector5Props {
  className: string;
}