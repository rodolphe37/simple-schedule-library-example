import React from "react";

const OpenWindowInactiveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.9639 0.58176C2.51307 -0.0450143 1.63949 -0.187642 1.01272 0.263192C0.385945 0.714026 0.243318 1.5876 0.694152 2.21437L2.45013 4.65563L0.589049 3.86816C0.522811 3.83892 0.449109 3.82724 0.377288 3.83458C0.171348 3.85759 -0.00119892 4.05439 6.27553e-06 4.26474V20.1819C-0.000322182 20.4648 0.332612 20.689 0.58915 20.5785L5.59323 18.4611H12.3803L15.9459 23.4182C16.3968 24.045 17.2703 24.1876 17.8971 23.7368C18.5239 23.286 18.6665 22.4124 18.2157 21.7856L2.9639 0.58176ZM11.2007 16.8212L6.70725 10.5741V16.8212H11.2007ZM4.2599 7.17167L5.08332 8.31643V11.0134L1.62385 10.4586L1.62385 6.17058L4.2599 7.17167ZM11.9319 7.62559V9.51885L14.1866 12.6535H17.0153L17.0153 16.5861L18.6395 18.8441V4.26474C18.6414 4.02036 18.4017 3.80398 18.1629 3.83458C18.1241 3.84047 18.0862 3.85181 18.0504 3.86816L13.0463 5.98552H9.39041L10.5701 7.62559H11.9319ZM17.0153 6.17058V10.4586L13.5558 11.0135V7.48453L17.0153 6.17058ZM1.62385 12.6535H5.08332V16.9621L1.62385 18.2549L1.62385 12.6535Z"
        className="fill-gray-600 dark:fill-white"
      />
    </svg>
  );
};

export default OpenWindowInactiveIcon;
