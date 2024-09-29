export type TemperatureInstruction =
  | "presence_1"
  | "presence_2"
  | "presence_3"
  | "presence_4"
  | "away"
  | "frost_protection"
  | "night";

export interface TimeSlot {
  start: number;
  instruction: TemperatureInstruction;
}

export enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

export enum TemperatureTypes {
  ECO = "eco",
  AWAY = "away",
  FROST_PROTECTION = "frost_protection",
  COMFORT_1 = "comfort_1",
  COMFORT_2 = "comfort_2",
  COMFORT_3 = "comfort_3",
  COMFORT_4 = "comfort_4",
}

export interface DaySlotSet {
  days: Array<Days>;
  time_slot: Array<TimeSlot>;
}

