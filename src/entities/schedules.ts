export type getSchedulesByEventPlaceIdResponse = {
  schedules: {
    id: string;
    title: string;
    day_slot_set: {
      days: number[];
      time_slot: {
        start: number;
        instruction: string;
      }[];
    }[];
  }[];
};
