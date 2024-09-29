import React from "react";

const GraphIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className="w-[32px] h-[32px]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-black dark:fill-white"
        d="M12 3C12.5523 3 13 3.44772 13 4V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V4C11 3.44772 11.4477 3 12 3Z"
      />
      <path
        d="M18 9C18.5523 9 19 9.44772 19 10V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V10C17 9.44772 17.4477 9 18 9Z"
        className="fill-black dark:fill-white"
      />
      <path
        d="M7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14V20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20V14Z"
        className="fill-black dark:fill-white"
      />
    </svg>
  );
};

export default GraphIcon;
