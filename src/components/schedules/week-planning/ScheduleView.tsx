import { getSchedulesByEventPlaceIdResponse } from "../../../entities/schedules";
import WeekPlanning from "./WeekPlanning";

const ScheduleView = ({
  scheduleId,
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
}: {
  scheduleId: string | undefined;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: () => boolean;
}) => {
  return (
    <div className="w-full">
      <WeekPlanning
        isInDarkMode={isInDarkMode!}
        weekStartsOn={weekStartsOn}
        scheduleByEventPlace={scheduleByEventPlace}
        scheduleIdentifier={scheduleId}
      />
    </div>
  );
};

export default ScheduleView;
