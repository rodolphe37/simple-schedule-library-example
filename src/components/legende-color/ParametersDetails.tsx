import { ParametersContainerStyle } from "../../utils/style";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import useGetEventTypeController from "../schedules/hooks/useGetEventTypeController";
import InstructionsList from "./InstructionsList";
import { TeventTypeData } from "../schedules/types";

const ParametersDetails = ({
  eventTypeData,
  isInDarkMode,
  locale
}: {
  eventTypeData: TeventTypeData;
  isInDarkMode: boolean;
  locale: string
}) => {
  const { width } = useWindowDimensions();
  const { errorResponse, eventWithNewNames } = useGetEventTypeController(
    eventTypeData!, locale
  );

  return (
    <div className="w-full pr-8 pl-4" style={ParametersContainerStyle(width)}>
      <div
        className={` p-8 ${errorResponse.error_code === 404 ? "w-[35%]" : ""}`}
      >
        {errorResponse.error_code !== 404 && eventWithNewNames.length > 0 ? (
          <div className="card bg-slate-100 p-4 rounded-lg w-[100%] flex flex-row flex-wrap justify-between">
            {eventWithNewNames.map((result) => {
              return (
                <InstructionsList
                  isInDarkMode={isInDarkMode}
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
