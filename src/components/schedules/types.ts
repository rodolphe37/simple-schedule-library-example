export type EventInstruction =
  | "presence_1"
  | "presence_2"
  | "presence_3"
  | "presence_4"
  | "away"
  | "frost_protection"
  | "night";

export interface TimeSlot {
  start: number;
  instruction: EventInstruction;
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

export enum EventTypes {
  EVENT_TYPE_1 = "eventType_1",
  EVENT_TYPE_2 = "eventType_2",
  EVENT_TYPE_3 = "eventType_3",
  EVENT_TYPE_4 = "eventType_4",
  EVENT_TYPE_5 = "eventType_5",
  EVENT_TYPE_6 = "eventType_6",
  EVENT_TYPE_7 = "eventType_7",
}

export interface DaySlotSet {
  days: Array<Days>;
  time_slot: Array<TimeSlot>;
}

export type TeventTypeData = {
  eventPlace_id: string;
  eventType_1: number | string;
  eventType_2: number | string;
  eventType_3: number | string;
  eventType_4: number | string;
  eventType_5: number | string;
  eventType_6: number | string;
  eventType_7: number | string;
};
