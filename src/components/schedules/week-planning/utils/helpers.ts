import { EventTypes } from "../../types";
import {
  bgComfort_1Color,
  bgComfort_2Color,
  bgComfort_3Color,
  bgComfort_4Color,
  bgEcoColor,
  bgFrost_protectionColor,
  bgAwayColorDark,
  bgAwayColorLight,
  textAwayColor,
  textComfort_1Color,
  textComfort_2Color,
  textComfort_3Color,
  textComfort_4Color,
  textEcoColor,
  textFrost_protectionColor,
} from "./constants";

// CODE FOR FIFTEEN MINUTES RANGE
const byFifteenMinutesitems = [];
for (let hour = 0; hour < 24; hour++) {
  byFifteenMinutesitems.push([hour, 0]);
  byFifteenMinutesitems.push([hour, 15]);
  byFifteenMinutesitems.push([hour, 30]);
  byFifteenMinutesitems.push([hour, 45]);
}

const forMinutesdate = new Date();
const formatterMinutes = new Intl.DateTimeFormat("fr-FR", {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});

export const rangebyFifteenMinutes = byFifteenMinutesitems.map((time) => {
  const [hour, minute] = time;
  forMinutesdate.setHours(hour);
  forMinutesdate.setMinutes(minute);

  return formatterMinutes.format(forMinutesdate);
});

//  CODE FOR CONVERT HOURS/MINUTES FORMAT TO MINUTES FORMAT
export function convertH2M(timeInHour: string) {
  const timeParts = timeInHour.split(":");
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

// CODE FOR CONVERT MINUTES FORMAT TO HOURS/MINUTES FORMAT
export function formatTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours === 24 ? "00" : hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

export const capitalizeFirstLetter = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

type TColorByEventProps = string;

export const colorCellByTemp = (
  event: TColorByEventProps,
  isInDarkMode: boolean
) =>
  event === EventTypes.COMFORT_1
    ? bgComfort_1Color
    : event === EventTypes.COMFORT_2
    ? bgComfort_2Color
    : event === EventTypes.COMFORT_3
    ? bgComfort_3Color
    : event === EventTypes.COMFORT_4
    ? bgComfort_4Color
    : event === EventTypes.ECO
    ? bgEcoColor
    : event === EventTypes.AWAY
    ? isInDarkMode
      ? bgAwayColorDark
      : bgAwayColorLight
    : event === EventTypes.FROST_PROTECTION
    ? bgFrost_protectionColor
    : "";

export const textEventColorInCell = (event: TColorByEventProps) =>
  event === EventTypes.COMFORT_1
    ? textComfort_1Color
    : event === EventTypes.COMFORT_2
    ? textComfort_2Color
    : event === EventTypes.COMFORT_3
    ? textComfort_3Color
    : event === EventTypes.COMFORT_4
    ? textComfort_4Color
    : event === EventTypes.AWAY
    ? textAwayColor
    : event === EventTypes.ECO
    ? textEcoColor
    : event === EventTypes.FROST_PROTECTION
    ? textFrost_protectionColor
    : "";

export enum eventInstructionNames {
  comfort_1 = "temperature.presence1.text",
  comfort_2 = "temperature.presence2.text",
  comfort_3 = "temperature.presence3.text",
  comfort_4 = "temperature.presence4.text",
  eco = "temperature.reduce.text",
  away = "temperature.away.text",
  frost_protection = "temperature.frost_protection.text",
}

export const eventInstructionName = (str: string) => {
  return eventInstructionNames[str as keyof typeof eventInstructionNames];
};

enum daysOfWeekNamesForTranslation {
  Monday = "schedule.dayOfWeek.one",
  Tuesday = "schedule.dayOfWeek.two",
  Wednesday = "schedule.dayOfWeek.three",
  Thursday = "schedule.dayOfWeek.four",
  Friday = "schedule.dayOfWeek.five",
  Saturday = "schedule.dayOfWeek.six",
  Sunday = "schedule.dayOfWeek.seven",
}

export const daysOfWeekNameTranslation = (str: string) => {
  return daysOfWeekNamesForTranslation[
    str as keyof typeof daysOfWeekNamesForTranslation
  ];
};
