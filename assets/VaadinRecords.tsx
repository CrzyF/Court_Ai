export default function VaadinRecords(props: VaadinRecordsProps) {
    return (
      <div className={`flex-grow ${props.className}`}>
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5_52)">
            <path
              d="M 7.375 16.594 H 14.75 V 20.281 H 7.375 V 16.594 Z"
              fill="#F8F8F8"
            />
            <path
              d="M 29.5 3.688 H 27.656 V 0 H 9.219 V 3.688 H 5.531 V 5.992 L 4.425 7.375 H 1.844 V 10.602 L 0 12.906 V 29.5 H 22.125 L 29.5 20.281 V 3.688 Z M 3.688 9.219 H 18.438 V 12.906 H 3.688 V 9.219 Z M 20.281 27.656 H 1.844 V 14.75 H 20.281 V 27.656 Z M 22.125 12.906 H 20.281 V 7.375 H 7.375 V 5.531 H 22.125 V 12.906 Z M 25.813 8.297 L 23.969 10.602 V 3.688 H 11.063 V 1.844 H 25.813 V 8.297 Z"
              fill="#F8F8F8"
            />
          </g>
          <defs>
            <clipPath id="clip0_5_52">
              <rect width="29.5" height="29.5" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  VaadinRecords.defaultProps = {
    className: "",
  };
  interface VaadinRecordsProps {
    className: string;
  }
  