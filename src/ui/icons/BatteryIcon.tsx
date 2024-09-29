import {
  percentBatteryGap,
  percentBatteryMinimumLevel,
} from "../../components/zones/constants";

type TThermalInfosProps = {
  batteryLevel: number | undefined;
};

const BatteryIcon = ({
  batteryLevel,
  ...props
}: React.SVGProps<SVGSVGElement> & TThermalInfosProps) => {
  return (
    <svg
      width="58"
      height="24"
      viewBox="0 0 58 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M56.8418 16.4211V7.57904"
        stroke={`${
          batteryLevel! > percentBatteryMinimumLevel ? "#717D96" : "#ef4444"
        }`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.1053 23.5H5C2.51472 23.5 0.5 21.4853 0.5 19V5C0.5 2.51472 2.51472 0.5 5 0.5H47.1053C49.5905 0.5 51.6053 2.51472 51.6053 5V19C51.6053 21.4853 49.5905 23.5 47.1053 23.5Z"
        stroke={`${
          batteryLevel! > percentBatteryMinimumLevel ? "#717D96" : "#ef4444"
        }`}
        fill="none"
        opacity="1.00"
      />

      <rect
        id="rounded-rectangle"
        width={`${
          batteryLevel === undefined
            ? 0
            : batteryLevel > percentBatteryGap
            ? batteryLevel - percentBatteryGap
            : batteryLevel > 0
            ? batteryLevel + percentBatteryGap
            : batteryLevel
        }%`}
        rx="5"
        height="100%"
        fill={`${
          batteryLevel! > percentBatteryMinimumLevel ? "#717D96" : "#ef4444"
        }`}
      />
    </svg>
  );
};

export default BatteryIcon;
