import { useEffect, useState } from "react";
import useDispatchColorsByEvent from "../schedules/hooks/useDispatchColorsByEvent";
import { TeventTypeData } from "../schedules/types";
import { extractNumbers } from "../schedules/week-planning/utils/helpers";

const InstructionsList = ({
  instruction,
  colorCellByEvents,
  eventsTextColor,
  locale,
  scheduleTypeByScheduleId,
}: {
  instruction: {
    id: number;
    key: string;
    originalKey: string;
    value: string | number | null;
  };
  colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
  locale: string;
  scheduleTypeByScheduleId: string | undefined;
}) => {
  const { colorCellByTemp, textEventColorInCell } = useDispatchColorsByEvent({
    colorCellByEvents,
    eventsTextColor,
  });

  const stringToExtract: string =
    instruction !== undefined ? (instruction.value as string) : "";

  const numbersForCalendarType = extractNumbers(stringToExtract);

  const [valueFromType, setValueFromType] = useState<string | number>("");
  useEffect(() => {
    const isFrenchDegree = locale == "fr" ? ` °C` : ` °F`;

    if (scheduleTypeByScheduleId === "temps") {
      setValueFromType(numbersForCalendarType + isFrenchDegree);
    } else {
      setValueFromType(instruction.value!);
    }
  }, [instruction, locale, numbersForCalendarType, scheduleTypeByScheduleId]);

  return (
    <div
      style={{ textAlign: "left" }}
      key={instruction?.key + instruction?.value}
    >
      <ul className="flex flex-row ">
        <li
          className=" mb-2 text-sm flex justify-between items-center p-2 shadow-md rounded-md"
          style={{
            backgroundColor: colorCellByTemp(instruction.originalKey) as string,
            color: textEventColorInCell(instruction.originalKey) as string,
            fontWeight: "bold",
          }}
        >
          <p>{instruction.key} :</p>
          <p>{valueFromType}</p>
        </li>
      </ul>
    </div>
  );
};

export default InstructionsList;
