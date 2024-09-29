import { convertH2M, rangebyFifteenMinutes } from "../utils/helpers";
import CellEvent from "./CellEvent";
import HoursGuidelines from "./HoursGuidelines";
import { CellProps, TEventToDisplay } from "../models/models";
import { useRecoilState } from "recoil";
import eventIdToDIsplayAtom from "../../../../globalStates/atoms/eventIdToDisplayAtom";
import { EventTypes } from "../../types";

const Cell = ({
  day,
  className,
  scrollRef,
  sortedEventsDaySlotArray,
  isInDarkMode,
  eventTypeData,
  locale,
}: CellProps) => {
  const [eventIdToDisplay, setEventIdToDisplay] =
    useRecoilState<TEventToDisplay>(eventIdToDIsplayAtom);

  return (
    <div
      className={`  flex flex-col gap-1 min-h-[120px] ${className} relative`}
    >
      <div>
        {rangebyFifteenMinutes.map((hour) => {
          const mins = convertH2M(hour);
          return (
            <div key={hour} className="relative">
              <div id={hour} className="  flex-col">
                <HoursGuidelines mins={mins} />
              </div>
              <div className=" w-full h-auto">
                {sortedEventsDaySlotArray &&
                  sortedEventsDaySlotArray?.map((result, id) =>
                    result.time_slot.map((timeEvent, idx) => {
                      const startTime = timeEvent.start;
                      return result.day === day && startTime === mins ? (
                        <div
                          ref={
                            idx === 1 ||
                            (idx === 0 &&
                              timeEvent.instruction !== EventTypes.EVENT_TYPE_6)
                              ? scrollRef
                              : null
                          }
                          className="absolute w-full top-0"
                          key={id}
                        >
                          <p>
                            {idx === 1 &&
                            timeEvent.instruction !== EventTypes.EVENT_TYPE_6
                              ? "it's a ref"
                              : null}
                          </p>
                          <CellEvent
                            locale={locale}
                            eventTypeData={eventTypeData}
                            isInDarkMode={isInDarkMode}
                            eventIdToDisplay={eventIdToDisplay}
                            setEventIdToDisplay={setEventIdToDisplay}
                            timeEvent={timeEvent}
                            timeEventId={idx}
                            day={result.day}
                            startTime={startTime}
                            events={result}
                          />
                        </div>
                      ) : null;
                    })
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cell;
