import clsx from "clsx";

export const WarningWifiIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
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
    <g clipPath="url(#clip0_784_20863)">
      <path
        d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12.8133 11.399C12.8229 11.4083 12.8323 11.4177 12.8416 11.4274L16.788 15.3738C16.8507 15.4231 16.9076 15.4798 16.9573 15.5431L29.7071 28.2929C30.0976 28.6834 30.0976 29.3166 29.7071 29.7071C29.3166 30.0976 28.6834 30.0976 28.2929 29.7071L21.6764 23.0906C21.4156 23.1427 21.1347 23.0914 20.9009 22.9252C20.0549 22.3242 19.0428 22.0013 18.005 22.0013C16.9673 22.0013 15.9552 22.3242 15.1092 22.9252C14.659 23.2451 14.0347 23.1394 13.7148 22.6892C13.395 22.239 13.5006 21.6147 13.9509 21.2948C15.1353 20.4534 16.5521 20.0013 18.005 20.0013C18.2088 20.0013 18.4118 20.0102 18.6136 20.0278L15.8319 17.2461C14.2927 17.593 12.8556 18.3019 11.6414 19.3171C11.2177 19.6714 10.5871 19.6151 10.2328 19.1914C9.87857 18.7677 9.93486 18.1371 10.3586 17.7828C11.5017 16.827 12.8093 16.0972 14.2115 15.6257L11.8876 13.3018C10.5032 13.9188 9.21972 14.7438 8.08221 15.7492C7.6684 16.115 7.03644 16.0761 6.67067 15.6623C6.3049 15.2485 6.34384 14.6165 6.75764 14.2507C7.85734 13.2787 9.07729 12.4554 10.3859 11.8001L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
        className="fill-red-500"
      />
      <path
        d="M21.8213 16.6214C22.0635 16.1251 22.6622 15.9191 23.1586 16.1613C24.0525 16.5976 24.8885 17.1439 25.647 17.7875C26.0681 18.1448 26.1198 18.7759 25.7625 19.197C25.4051 19.6181 24.7741 19.6698 24.353 19.3125C23.7215 18.7767 23.0256 18.3219 22.2814 17.9587C21.785 17.7165 21.5791 17.1177 21.8213 16.6214Z"
        className="fill-red-500"
      />
      <path
        d="M22.7313 12.7656C20.8193 12.1294 18.7988 11.8849 16.7903 12.0468C16.2398 12.0911 15.7575 11.6808 15.7132 11.1303C15.6688 10.5798 16.0791 10.0976 16.6296 10.0532C18.906 9.86979 21.1959 10.1469 23.3628 10.868C25.5296 11.589 27.529 12.7393 29.2415 14.2501C29.6557 14.6155 29.6952 15.2474 29.3299 15.6615C28.9645 16.0757 28.3326 16.1152 27.9184 15.7499C26.4073 14.4168 24.6432 13.4019 22.7313 12.7656Z"
        className="fill-red-500"
      />
      <path
        d="M18 25C17.4477 25 17 25.4477 17 26C17 26.5523 17.4477 27 18 27H18.01C18.5623 27 19.01 26.5523 19.01 26C19.01 25.4477 18.5623 25 18.01 25H18Z"
        className="fill-red-500"
      />
    </g>
    <defs>
      <clipPath id="clip0_784_20863">
        <rect width="24" height="24" fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
);
