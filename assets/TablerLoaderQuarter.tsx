export default function TablerLoaderQuarter(props: TablerLoaderQuarterProps) {
    return (
      <div className="absolute left-[46.03%] right-[46.03%] top-[53.97%] bottom-[33.81%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 60 30 V 15 M 30 60 H 15 M 38.75 38.75 L 28 28"
            stroke="#550221"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  TablerLoaderQuarter.defaultProps = {
    className: "",
  };
  interface TablerLoaderQuarterProps {
    className: string;
  }
  