import clsx from "clsx";

const BatteryWeak = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={clsx("w-8  stroke-red-500", className)}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="34" height="34" rx="2" strokeWidth="2" />
      <path
        d="M30 21.2105V16.7895"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.31579 25H9C7.34315 25 6 23.6569 6 22V16C6 14.3431 7.34314 13 9 13H9.31579C10.9726 13 12.3158 14.3431 12.3158 16V22C12.3158 23.6569 10.9726 25 9.31579 25Z"
        className="fill-red-500"
      />
      <path
        d="M25.1053 24H9C7.89543 24 7 23.1046 7 22V16C7 14.8954 7.89543 14 9 14H25.1053C26.2098 14 27.1053 14.8954 27.1053 16V22C27.1053 23.1046 26.2098 24 25.1053 24Z"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BatteryWeak;
