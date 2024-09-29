import clsx from "clsx";

export const CalibrationErrorIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    className={clsx("w-8   stroke-red-500", className)}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="34" height="34" rx="2" strokeWidth="2" />
    <path
      d="M18 9C17.0335 9 16.25 9.7835 16.25 10.75V19.25C16.25 20.2165 17.0335 21 18 21C18.9665 21 19.75 20.2165 19.75 19.25V10.75C19.75 9.7835 18.9665 9 18 9Z"
      className="fill-red-500"
    />
    <path
      d="M18 27C19.1046 27 20 26.1046 20 25C20 23.8954 19.1046 23 18 23C16.8954 23 16 23.8954 16 25C16 26.1046 16.8954 27 18 27Z"
      className="fill-red-500"
    />
  </svg>
);
