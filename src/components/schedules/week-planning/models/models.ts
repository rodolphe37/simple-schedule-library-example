import { SetterOrUpdater } from "recoil";
import { TeventTypeData } from "../../types";

export interface EventType {
  id: string;
  title: string;
  day_slot_set: {
    days: number[];
    time_slot: { start: number; instruction: string }[];
  }[];
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
[];

export interface CellEventProps {
  timeEvent: {
    start: number;
    instruction: string;
  };
  events: {
    day: number;
    time_slot: {
      start: number;
      instruction: string;
    }[];
  };
  timeEventId: number;
  startTime: number;
  day: number;
  eventIdToDisplay: TEventToDisplay;
  setEventIdToDisplay: SetterOrUpdater<TEventToDisplay>;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
}

export interface CellProps {
  day: number | null;
  className?: string;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  sortedEventsDaySlotArray:
    | {
        day: number;
        time_slot: {
          start: number;
          instruction: string;
        }[];
      }[]
    | undefined;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
}

export type TEventToDisplay = {
  day: undefined | number;
  id: undefined | number;
  startTime: number | undefined;
  endTime: number | undefined;
};
