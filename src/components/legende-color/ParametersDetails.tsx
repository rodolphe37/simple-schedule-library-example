import { ParametersContainerStyle } from "../../utils/style";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import useGetTemperaturesController from "../schedules/hooks/useGetTemperaturesController";
import InstructionsList from "./InstructionsList";

const ParametersDetails = () => {
  const { width } = useWindowDimensions();
  const { errorResponse, tempWithNewNames } = useGetTemperaturesController();

  return (
    <div className="w-full pr-8 pl-4" style={ParametersContainerStyle(width)}>
      <div
        className={` p-8 ${errorResponse.error_code === 404 ? "w-[35%]" : ""}`}
      >
        {errorResponse.error_code !== 404 && tempWithNewNames.length > 0 ? (
          <div className="card bg-slate-100 p-4 rounded-lg w-[100%] flex flex-row flex-wrap justify-between">
            {tempWithNewNames.map((result) => {
              return <InstructionsList key={result.id} instruction={result} />;
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
