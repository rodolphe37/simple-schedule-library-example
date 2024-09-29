import { useState } from "react";
import { EventType, TEventToDisplay } from "./models/models";
import Calendar from "./components/Calendar";
import eventIdToDIsplayAtom from "../../../globalStates/atoms/eventIdToDisplayAtom";
import { useRecoilState } from "recoil";
import { getSchedulesByEventPlaceIdResponse } from "../../../entities/schedules";

const WeekPlanning = ({
  scheduleIdentifier,
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
}: {
  scheduleIdentifier?: string;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: () => boolean;
}) => {
  const [, setEventIdToDisplay] =
    useRecoilState<TEventToDisplay>(eventIdToDIsplayAtom);
  const [events, setEvents] = useState<EventType[] | undefined>();

  if (events === undefined && scheduleByEventPlace) {
    setEvents(scheduleByEventPlace?.schedules);
  }

  return (
    <main
      onMouseLeave={() => {
        setEventIdToDisplay({
          day: undefined,
          id: undefined,
          startTime: undefined,
          endTime: undefined,
        });
      }}
      className={`h-full pl-4 pr-4 pb-4 mx-auto ${
        isInDarkMode && isInDarkMode() ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Calendar
        isInDarkMode={isInDarkMode!}
        scheduleIdentifier={scheduleIdentifier!}
        weekStartsOn={weekStartsOn}
        events={events}
      />
    </main>
  );
};

export default WeekPlanning;
