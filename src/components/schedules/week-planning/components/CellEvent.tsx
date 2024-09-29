import { Fragment, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import {
  colorCellByTemp,
  textEventColorInCell,
  tempInstructionName,
} from "../utils/helpers";
import { CellEventProps } from "../models/models";
import CellEventsInfosModal from "./CellEventsInfosModal";
import { useIntl } from "react-intl";
import useGetTemperaturesController from "../../hooks/useGetTemperaturesController";

const CellEvent = ({
  timeEvent: event,
  events,
  timeEventId,
  startTime,
  day,
  eventIdToDisplay,
  isInDarkMode,
  setEventIdToDisplay,
}: CellEventProps) => {
  const ModalRef = useRef<HTMLDivElement>(null);
  const intl = useIntl();

  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  const { temperatures } = useGetTemperaturesController();

  const temperatureInstructionTextWithoutWhiteSpace = event.instruction.trim();

  const currentDegresTemperature = temperatures.find(
    (el) => el.key === temperatureInstructionTextWithoutWhiteSpace
  );

  const endTime =
    events?.time_slot[timeEventId + 1] !== undefined
      ? events?.time_slot[timeEventId + 1]?.start
      : 1440;

  const heightSize = () => {
    const HEIGHT_BASE_MINUTES_CELLS = 12;
    const MINUTES_INTERVALS = 15;
    const CELLS_MARGIN_BOTTOM = 2;
    const diffBetweenTimes = endTime - startTime;
    return (
      (HEIGHT_BASE_MINUTES_CELLS * diffBetweenTimes) / MINUTES_INTERVALS -
      CELLS_MARGIN_BOTTOM
    );
  };

  useClickOutside(ModalRef, () => setIsModalOpen(false));

  const HandleEventInfoOnMouseEnter = () => {
    if (
      day !== eventIdToDisplay.day ||
      timeEventId !== eventIdToDisplay.id ||
      endTime !== eventIdToDisplay.endTime
    ) {
      setEventIdToDisplay({
        day: day,
        id: timeEventId,
        startTime: startTime,
        endTime: endTime,
      });
    }
  };

  return (
    <>
      {isModalOpen && (
        <CellEventsInfosModal
          isInDarkMode={isInDarkMode}
          ModalRef={ModalRef}
          setIsModalOpen={setIsModalOpen}
          currentDegresTemperature={currentDegresTemperature}
          startTime={startTime}
          endTime={endTime}
          day={day}
          temperatureInstructionTextWithoutWhiteSpace={
            temperatureInstructionTextWithoutWhiteSpace
          }
        />
      )}

      <Fragment>
        <div
          onMouseEnter={HandleEventInfoOnMouseEnter}
          style={{
            height: heightSize(),
            backgroundColor: colorCellByTemp(
              temperatureInstructionTextWithoutWhiteSpace,
              isInDarkMode!
            ),
            color: textEventColorInCell(
              temperatureInstructionTextWithoutWhiteSpace
            ),
            fontSize:
              temperatureInstructionTextWithoutWhiteSpace.length > 6
                ? "0.55rem"
                : "0.7rem",
          }}
          className={` text-white font-semibold absolute z-[200] top-0 min-h-[60px] truncate pb-2 pl-2 pr-2 gap-y-2  flex flex-row justify-between rounded-md w-full  text-left  cursor-pointer `}
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex flex-col w-full relative z-30">
            <span className="flex flex-col flex-wrap w-full justify-between">
              <p
                className="flex flex-row justify-start items-start w-full"
                style={{ fontSize: "16px" }}
              >
                {currentDegresTemperature?.value}°C
              </p>
              <p style={{ fontSize: "14px" }}>
                {intl.formatMessage({
                  id: tempInstructionName(
                    temperatureInstructionTextWithoutWhiteSpace
                  ),
                })}
              </p>
            </span>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default CellEvent;
