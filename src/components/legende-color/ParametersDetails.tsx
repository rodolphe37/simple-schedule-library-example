import { ParametersContainerStyle } from "../../utils/style";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import useGetEventTypeController from "../schedules/hooks/useGetEventTypeController";
import InstructionsList from "./InstructionsList";
import { TeventsName, TeventTypeData } from "../schedules/types";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";
import { useParams } from "react-router-dom";

const ParametersDetails = ({
  eventTypeData,
  isInDarkMode,
  locale,
  colorCellByEvents,
  eventsTextColor,
  eventsName,
  eventsNameUs,
  scheduleByEventPlace,
}: {
  eventTypeData: TeventTypeData;
  isInDarkMode: boolean;
  locale: string;
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
}) => {
  const { width } = useWindowDimensions();
  const { scheduleId } = useParams<"scheduleId">();
  const { errorResponse, eventWithNewNames } = useGetEventTypeController(
    eventTypeData!,
    locale,
    eventsName,
    eventsNameUs
  );

  const scheduleTypeByScheduleId = scheduleByEventPlace.schedules.find(
    (res) => res.id === scheduleId
  )?.type;

  return (
    <div
      className="w-full -mt-28 pr-8 pl-4"
      style={ParametersContainerStyle(width)}
    >
      <div
        className={` p-8 ${errorResponse.error_code === 404 ? "w-[35%]" : ""}`}
      >
        {errorResponse.error_code !== 404 && eventWithNewNames.length > 0 ? (
          <div
            className={`card ${
              isInDarkMode ? "bg-gray-900" : "bg-slate-100"
            } p-2 rounded-lg w-[100%] flex flex-row flex-wrap justify-between`}
          >
            {eventWithNewNames.map((result) => {
              return (
                <InstructionsList
                  scheduleTypeByScheduleId={scheduleTypeByScheduleId}
                  locale={locale}
                  eventsTextColor={eventsTextColor}
                  colorCellByEvents={colorCellByEvents}
                  key={result.id}
                  instruction={result}
                />
              );
            })}
          </div>
        ) : (
          <>
            <p>{errorResponse.message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ParametersDetails;
