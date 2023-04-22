export default function Vector2(props: Vector2Props) {
  return (
    <div>
      <div className="absolute left-[2.91%] right-[95.5%] top-[44.2%] bottom-[53.36%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 19.2 3.2 H 21.6 C 22.237 3.2 22.847 3.453 23.297 3.903 C 23.747 4.353 24 4.963 24 5.6 V 21.6 C 24 22.237 23.747 22.847 23.297 23.297 C 22.847 23.747 22.237 24 21.6 24 H 2.4 C 1.763 24 1.153 23.747 0.703 23.297 C 0.253 22.847 0 22.237 0 21.6 L 0 5.6 C 0 4.963 0.253 4.353 0.703 3.903 C 1.153 3.453 1.763 3.2 2.4 3.2 H 4.8 V 0 H 6.4 V 3.2 H 17.6 V 0 H 19.2 V 3.2 Z M 9.6 12.8 H 4.8 V 11.2 H 9.6 V 12.8 Z M 19.2 11.2 H 14.4 V 12.8 H 19.2 V 11.2 Z M 9.6 17.6 H 4.8 V 16 H 9.6 V 17.6 Z M 14.4 17.6 H 19.2 V 16 H 14.4 V 17.6 Z"
            fill="#D2D7DA"
          />
        </svg>
      </div>
    </div>
  );
}
Vector2.defaultProps = {
  className: "",
};
interface Vector2Props {
  className: string;
}