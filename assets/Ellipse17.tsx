export default function Ellipse17(props: Ellipse17Props) {
    return (
      <div className={`${props.className}`}>
        <div className="h-[15px] w-[57px]">
          <svg
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            viewBox="0 0 57 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <circle
              cx="28.5005"
              cy="28.5"
              r="28.5"
              fill="url(#pattern-11:93-0)"
            />
            <defs>
              <pattern
                id="pattern-11:93-0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_11_93"
                  transform="translate(-0.250144) scale(0.000577034)"
                />
              </pattern>
              <image
                id="image0_11_93"
                width="2600"
                height="1733"
                xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e6aaadfa-6058-4e75-9419-cc434e022f5d.webp"
              />
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  Ellipse17.defaultProps = {
    className: "",
  };
  interface Ellipse17Props {
    className: string;
  }
  