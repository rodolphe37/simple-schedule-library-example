import React from "react";

type TIconStyleProps = {
  iconStyle: string;
};

const BurgerMenuIcon = ({
  iconStyle,
  ...props
}: React.SVGProps<SVGSVGElement> & TIconStyleProps) => {
  return (
    <svg
      {...props}
      width={props.width || "50px"}
      height={props.height || "50px"}
      version="1.1"
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      className={iconStyle}
    >
      <g className={props.className}>
        <path d="m344.4 430.8h511.2c21.602 0 38.398-16.801 38.398-38.398 0-21.602-16.801-38.398-38.398-38.398l-511.2-0.003906c-21.602 0-38.398 16.801-38.398 38.398 0 21.602 16.801 38.402 38.398 38.402z" />
        <path d="m344.4 638.4h511.2c21.602 0 38.398-16.801 38.398-38.398 0-21.602-16.801-38.398-38.398-38.398h-511.2c-21.602 0-38.398 16.801-38.398 38.398 0 21.602 16.801 38.398 38.398 38.398z" />
        <path d="m855.6 846c21.602 0 38.398-16.801 38.398-38.398 0-21.602-16.801-38.398-38.398-38.398l-511.2-0.003906c-21.602 0-38.398 16.801-38.398 38.398 0 21.602 16.801 38.398 38.398 38.398z" />
      </g>
    </svg>
  );
};

export default BurgerMenuIcon;
