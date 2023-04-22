export default function Vector4(props: Vector4Props) {
  return (
    <div>
      <div className="absolute left-[2.91%] right-[95.5%] top-[51.02%] bottom-[46.54%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 24 3 H 22.5 V 0 H 7.5 V 3 H 4.5 V 4.875 L 3.6 6 H 1.5 V 8.625 L 0 10.5 V 24 H 18 L 24 16.5 V 3 Z M 3 7.5 H 15 V 10.5 H 3 V 7.5 Z M 16.5 22.5 H 1.5 V 12 H 16.5 V 22.5 Z M 18 10.5 H 16.5 V 6 H 6 V 4.5 H 18 V 10.5 Z M 21 6.75 L 19.5 8.625 V 3 H 9 V 1.5 H 21 V 6.75 Z"
            fill="#5265EB"
          />
        </svg>
      </div>
    </div>
  );
}
Vector4.defaultProps = {
  className: "",
};
interface Vector4Props {
  className: string;
}