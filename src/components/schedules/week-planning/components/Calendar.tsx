import { Fragment } from "react";
import Cell from "./Cell";
import {
  daysOfWeekNameFr,
  daysOfWeekNameUs,
  rangebyFifteenMinutes,
} from "../utils/helpers";
import { EventType } from "../models/models";
import { ScrollProvider } from "../hooks/useScrollContextCustomHook";
import useCalendarController from "../hooks/useCalendarController";
import CalendarScrollToTopButton from "./CalendarScrollToTopButton";
import CalendarScrollToBottomButton from "./CalendarScrollToBottomButton";
import useWindowDimensions from "../../../../hooks/useGetWindowDimensions";
import HoursRangeIndicator from "./HoursRangeIndicator";
import { TContentForModal, TeventTypeData } from "../../types";
import useGetDaysController from "../../hooks/useGetDaysController";

interface ICalendarProps {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  events?: EventType[];
  scheduleIdentifier: string;
  isInDarkMode: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  withDays?: boolean;
}

const Calendar = ({
  weekStartsOn,
  events,
  scheduleIdentifier,
  isInDarkMode,
  eventTypeData,
  locale,
  modalContent,
  withDays,
}: ICalendarProps) => {
  const {
    updateScroll,
    scrollRef,
    calendarData,
    eventIdToDisplay,
    scrollToBottom,
    sortedEventsDaySlotArray,
  } = useCalendarController({ weekStartsOn, scheduleIdentifier, events });
  const { height } = useWindowDimensions();
  const {  calendarWithDaysUS, calendarWithDaysFrench } = useGetDaysController(calendarData);

  return (
    <ScrollProvider
      updateScroll={updateScroll}
      children={
        <div className=" relative flex flex-col gap-5">
          <div
            style={{ maxHeight: height / 1.5 }}
            className="flex flex-col  rounded-t-xl relative"
          >
            <div className="grid grid-cols-8 grid-rows-1 font-bold text-center text-black dark:text-white  rounded-t-xl ">
              <div className="p-2 relative -mt-[14px]">
                <CalendarScrollToTopButton
                  isInDarkMode={isInDarkMode}
                  scrollRef={scrollRef}
                />
              </div>
              {withDays
                ? locale === "fr" ? calendarWithDaysFrench?.map((day) => (
                  <div
                    key={day}
                    className={`p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`}
                  >
                    {day}
                  </div>
                )) : calendarWithDaysUS?.map((day) => (
                  <div
                    key={day}
                    className={`p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`}
                  >
                    {day}
                  </div>
                ))
                : calendarData.weekDayNames.map((day) => (
                    <div
                      key={day}
                      className={`p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`}
                    >
                      {locale === "fr"
                        ? daysOfWeekNameFr(day)
                        : daysOfWeekNameUs(day)}
                    </div>
                  ))}
            </div>

            <div
              id="scroller"
              style={{ overflowY: "scroll" }}
              className="grid flex-1 grid-cols-8 overflow-hidden border-t border-gray-400"
            >
              <HoursRangeIndicator
                locale={locale}
                isInDarkMode={isInDarkMode}
                rangebyFifteenMinutes={rangebyFifteenMinutes}
                eventIdToDisplay={eventIdToDisplay}
              />
              {sortedEventsDaySlotArray?.map((res, i) => (
                <Fragment key={i}>
                  <Cell
                    events={events}
                    scheduleIdentifier={scheduleIdentifier}
                    modalContent={modalContent}
                    locale={locale}
                    eventTypeData={eventTypeData}
                    isInDarkMode={isInDarkMode}
                    scrollRef={scrollRef}
                    day={res.day}
                    className={i !== 7 ? "p-1 " : ""}
                    sortedEventsDaySlotArray={sortedEventsDaySlotArray}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <CalendarScrollToBottomButton
              isInDarkMode={isInDarkMode}
              scrollToBottom={scrollToBottom}
            />
          </div>
        </div>
      }
    />
  );
};

export default Calendar;
