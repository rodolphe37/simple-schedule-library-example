import breakpoints from "./breakpoints";
import { CommunicationStatus } from "./types";

export const getColorFromObjectCommunicationStatus = (
  status: CommunicationStatus
) => {
  switch (status) {
    case CommunicationStatus.OK:
      return "text-green-600";
    case CommunicationStatus.WARNING:
      return "text-yellow-500";
    case CommunicationStatus.CRITICAL:
    case CommunicationStatus.NO_TRANSMISSION:
    default:
      return "text-red-500";
  }
};

export const hrStyle: React.CSSProperties | undefined = {
  marginTop: "5px",
  border: "0.5px dotted lightgray",
  borderRadius: "5px",
  width: "100%",
  marginBottom: "10px",
  opacity: 0.35,
};

export const projectDetailResponsiveStyle = (width: number) =>
  width < breakpoints.xs
    ? { paddingTop: "0rem" }
    : width < breakpoints.sm
    ? { paddingTop: "3rem" }
    : width > breakpoints.md
    ? { paddingTop: "4rem" }
    : {};

export const gridResponsiveStyle = (width: number) =>
  width < breakpoints.xs
    ? { gridTemplateColumns: "repeat(1,1fr)", paddingTop: "10rem" }
    : width < breakpoints.md
    ? { gridTemplateColumns: "repeat(2,1fr)", paddingTop: "6rem" }
    : width > breakpoints.md
    ? { gridTemplateColumns: "repeat(3,1fr)" }
    : {};

export const ParametersContainerStyle = (width: number) =>
  width < breakpoints.xs
    ? { paddingTop: "9rem" }
    : width < breakpoints.sm
    ? { paddingTop: "6rem" }
    : width > breakpoints.md
    ? { paddingTop: "2rem" }
    : { paddingTop: "6rem" };

export const programmationContainerStyle = (width: number) =>
  width < breakpoints.xs
    ? { paddingTop: "8rem" }
    : width < breakpoints.sm
    ? { paddingTop: "4rem" }
    : width > breakpoints.md
    ? { paddingTop: "1rem" }
    : { paddingTop: "6rem" };

export const schedulesContainerStyle = (width: number) =>
  width < breakpoints.xs
    ? { marginTop: "1rem", padding: "4em 6em" }
    : width < breakpoints.sm
    ? { marginTop: "1rem", padding: "4em 6em" }
    : width > breakpoints.md
    ? { marginTop: "1rem", padding: "4em 6em" }
    : { marginTop: "2rem", padding: "4em' 6em" };

export const housingContainerStyle = (width: number) =>
  width > breakpoints.xs && width < breakpoints.sm
    ? { paddingTop: "8rem" }
    : width < breakpoints.xs
    ? { paddingTop: "8rem" }
    : { paddingTop: "6rem" };

export const bgGray200_700Color = "bg-gray-200 dark:bg-gray-700";

export const bgGray200_700_90 = "bg-gray-200 dark:bg-gray-700/90";

export const bgGray100_600Color = "bg-gray-100 dark:bg-gray-600";

export const bgGray100_900Color = "bg-gray-100 dark:bg-gray-900";

export const bgWhite = "bg-white";

export const bgWhiteGray_600Color = "bg-white dark:bg-gray-600";

export const bgWhite_gray700Color = "bg-white dark:bg-gray-700/90";

export const bgWhite200Gray700_90 = "bg-white-200 dark:bg-gray-700/90";

export const bgWhite_gray800Color = "bg-white dark:bg-gray-800";

export const bgGray50_800Color = "bg-gray-50 dark:bg-gray-800";

export const bgGray50_900Color = "bg-gray-50 dark:bg-gray-900";

export const bgGray200_900Color = "bg-gray-200 dark:bg-gray-900";

export const bgGray200 = "bg-gray-200";

export const bgBlue500 = "bg-blue-500";

export const bgGray500 = "bg-gray-500";

export const bgGray600 = "dark:bg-gray-600";

export const bgGray800 = "dark:bg-gray-800";

export const bgGray900 = "dark:bg-gray-900";

export const bgGradientGray100To50And900To800 =
  "bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800";

export const bgGray100Gradient900To800 =
  "bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800";

export const textBlue500 = "text-blue-600";

export const textWhite = "text-white";

export const textWhite_blue500 = "dark:text-white text-blue-600";

export const textDark700 = "text-dark-700";

export const textGray300 = "text-gray-300";

export const textGray700 = "text-gray-700";

export const textGray700_white = "text-gray-700 dark:text-white";

export const textGray700_light100 = "text-gray-700 dark:text-light-100";

export const textGray800 = "text-gray-800";

export const textGray800_200Color = "text-gray-800 dark:text-gray-200";

export const textColorInDarkMode = "dark:text-white";

export const textGray600_50 = "text-gray-600 dark:text-gray-50";

export const textGray900_50 = "text-gray-900 dark:text-gray-50";

export const textColorGray700_300 = "text-gray-700 dark:text-gray-300";

export const ringGray200_900 = "ring-gray-200 dark:ring-gray-900";
