import * as React from "react";

function Expired(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="icon"
      height="1em"
      viewBox="0 0 100 100"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-white"
      {...props}
    >
      <title>Expired</title>
      <path d="M48.87 18.19h-6v24.96H26.5v6h22.37z" />
      <path d="M87.55 53.17a42.84 42.84 0 10-34.38 34.38 24.57 24.57 0 1034.38-34.38zM45.42 82.26a36.84 36.84 0 1136.84-36.84A37.29 37.29 0 0182 50a24.56 24.56 0 00-32 32 37.26 37.26 0 01-4.58.26zm27.42 9.16a18.58 18.58 0 1118.58-18.57 18.6 18.6 0 01-18.57 18.57z" />
      <path d="M69.85 59.97h6v18.75h-6zM69.85 80.97h6v5.75h-6z" />
    </svg>
  );
}

export default Expired;
