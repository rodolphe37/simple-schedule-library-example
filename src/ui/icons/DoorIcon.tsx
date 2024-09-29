import React from "react";

export const DoorIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>DoorIcon</title>
      <g fill={props.fill}>
        <path d="m1110 990h-210v-810c0-16.801-13.199-30-30-30h-540c-16.801 0-30 13.199-30 30v810h-210c-38.398 0-38.398 60 0 60h1020c38.398 0 38.398-60 0-60zm-270 0h-480v-780h480z" />
        <path d="m810 660c0 16.57-13.43 30-30 30s-30-13.43-30-30 13.43-30 30-30 30 13.43 30 30" />
      </g>
    </svg>
  );
};
