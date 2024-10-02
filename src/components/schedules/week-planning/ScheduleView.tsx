import { getSchedulesByEventPlaceIdResponse } from "../../../entities/schedules";
import { TContentForModal, TeventTypeData } from "../types";
import WeekPlanning from "./WeekPlanning";

const ScheduleView = ({
  scheduleId,
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
  eventTypeData,
  locale,
  modalContent,
  withDays,
  colorCellByEvents,
  eventsTextColor,
}: {
  scheduleId: string | undefined;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  withDays?: boolean;
  colorCellByEvents: string[];
  eventsTextColor: string[];
}) => {
  return (
    <div className="w-full">
      <WeekPlanning
        eventsTextColor={eventsTextColor}
        colorCellByEvents={colorCellByEvents}
        withDays={withDays}
        modalContent={modalContent}
        locale={locale}
        eventTypeData={eventTypeData}
        isInDarkMode={isInDarkMode!}
        weekStartsOn={weekStartsOn}
        scheduleByEventPlace={scheduleByEventPlace}
        scheduleIdentifier={scheduleId}
      />
    </div>
  );
};

export default ScheduleView;
