export default function Vector8(props: Vector8Props) {
  return (
    <div>
      <div className="absolute left-[60.98%] right-[37.37%] top-[89.92%] bottom-[6.62%]">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 25 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 12.5 0 C 13.921 0 15.283 0.564 16.288 1.569 C 17.293 2.574 17.857 3.936 17.857 5.357 V 16.071 C 17.857 17.492 17.293 18.855 16.288 19.86 C 15.283 20.864 13.921 21.429 12.5 21.429 C 11.079 21.429 9.717 20.864 8.712 19.86 C 7.707 18.855 7.143 17.492 7.143 16.071 V 5.357 C 7.143 3.936 7.707 2.574 8.712 1.569 C 9.717 0.564 11.079 0 12.5 0 Z M 25 16.071 C 25 22.375 20.339 27.571 14.286 28.446 V 33.929 H 10.714 V 28.446 C 4.661 27.571 0 22.375 0 16.071 H 3.571 C 3.571 18.439 4.512 20.71 6.187 22.385 C 7.861 24.059 10.132 25 12.5 25 C 14.868 25 17.139 24.059 18.814 22.385 C 20.488 20.71 21.429 18.439 21.429 16.071 H 25 Z"
            fill="#F8F8F8"
          />
        </svg>
      </div>
    </div>
  );
}
Vector8.defaultProps = {
  className: "",
};
interface Vector8Props {
  className: string;
}

