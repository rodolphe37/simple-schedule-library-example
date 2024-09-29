import { useIntl } from "react-intl";
import { Days } from "../../types";
import {
  capitalizeFirstLetter,
  daysOfWeekNameTranslation,
  formatTime,
  eventInstructionName,
} from "../utils/helpers";
import CrossIcon from "../../../../ui/icons/CrossIcon";

type TCellEventsInfoModalProps = {
  ModalRef: React.RefObject<HTMLDivElement>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  currentEventType:
    | {
        key: string;
        value: string | number | null;
      }
    | undefined;
  startTime: number;
  endTime: number;
  day: number;
  eventInstructionTextWithoutWhiteSpace: string;
  isInDarkMode?: boolean;
};

const CellEventsInfosModal = ({
  ModalRef,
  setIsModalOpen,
  currentEventType,
  startTime,
  endTime,
  day,
  eventInstructionTextWithoutWhiteSpace,
  isInDarkMode,
}: TCellEventsInfoModalProps) => {
  const intl = useIntl();

  const daySelected = capitalizeFirstLetter(Days[day]);
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-[9999] flex items-center justify-center ${
        isInDarkMode ? "bg-gray-700/90" : "bg-gray-400/80"
      } bg-opacity-50 backdrop-blur-sm  transition-all overflow-y-auto`}
    >
      <div
        ref={ModalRef}
        className={`absolute mx-5 w-full md:max-w-[380px] ${
          isInDarkMode ? "bg-gray-900" : "bg-gray-100"
        } border border-slate-300 rounded-lg flex flex-col  z-50 justify-center`}
      >
        <header className={`min-h-6 px-4 rounded-t-md  w-full flex items-center justify-between ${isInDarkMode ? "bg-gray-400/80" : "bg-blue-500" } text-white`}>
          <h1 className="text-center font-semibold mt-4 mb-4 ">
            {intl.formatMessage({
              id: "schedules.page.eventDetails.modal.title",
            })}
          </h1>
          <div
            onClick={() => setIsModalOpen(false)}
            className="flex items-center cursor-pointer"
          >
            <p className="mr-2">
              {intl.formatMessage({
                id: "cancel.button.text",
              })}
            </p>
            <CrossIcon fill="currentColor" />
          </div>
        </header>

        <div className="flex flex-col items-center justify-start p-4">
          <div className="flex flex-row gap-4 items-center w-[50%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {intl.formatMessage({
                id: eventInstructionName(eventInstructionTextWithoutWhiteSpace),
              })}
              :
            </h4>
            <p className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {" "}
              {currentEventType?.value}°C
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center w-[50%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {intl.formatMessage({
                id: "schedules.page.eventDetails.modal.startTime.text",
              })}
            </h4>
            <p className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {formatTime(startTime)}
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center w-[50%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {intl.formatMessage({
                id: "schedules.page.eventDetails.modal.endTime.text",
              })}
            </h4>
            <p className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {formatTime(endTime)}
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center w-[50%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {intl.formatMessage({
                id: "schedules.page.eventDetails.modal.day.text",
              })}
            </h4>
            <div className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {intl.formatMessage({
                id: daysOfWeekNameTranslation(daySelected),
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellEventsInfosModal;
