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
}: {
  scheduleId: string | undefined;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  withDays?: boolean;
}) => {
  return (
    <div className="w-full">
      <WeekPlanning
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
