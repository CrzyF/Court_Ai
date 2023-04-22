export default function Vector6(props: Vector6Props) {
  return (
    <div>
      <div className="absolute left-[30.42%] right-[68.39%] top-[3.77%] bottom-[94.4%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 7.714 18 V 10.286 H 0 V 7.714 H 7.714 V 0 H 10.286 V 7.714 H 18 V 10.286 H 10.286 V 18 H 7.714 Z"
            fill="#5265EB"
          />
        </svg>
      </div>
    </div>
  );
}
Vector6.defaultProps = {
  className: "",
};
interface Vector6Props {
  className: string;
}