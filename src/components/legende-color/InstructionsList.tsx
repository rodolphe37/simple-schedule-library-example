import {
  colorCellByTemp,
  textEventColorInCell,
} from "../schedules/week-planning/utils/helpers";

const InstructionsList = ({
  instruction,
  isInDarkMode,
}: {
  instruction: {
    id: number;
    key: string;
    originalKey: string;
    value: string | number | null;
  };
  isInDarkMode: boolean;
}) => {
  return (
    <div
      style={{ textAlign: "left" }}
      key={instruction?.key + instruction?.value}
    >
      <ul className="flex flex-row ">
        <li
          className=" mb-2 text-sm flex justify-between items-center p-2 shadow-md rounded-md"
          style={{
            backgroundColor: colorCellByTemp(
              instruction.originalKey,
              isInDarkMode
            ),
            color: textEventColorInCell(instruction.originalKey),
            fontWeight: "bold",
          }}
        >
          <p>{instruction.key} :</p>
          <p>{instruction.value + "°C"}</p>
        </li>
      </ul>
    </div>
  );
};

export default InstructionsList;
