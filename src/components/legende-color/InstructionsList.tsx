import useDispatchColorsByEvent from "../schedules/hooks/useDispatchColorsByEvent";

const InstructionsList = ({
  instruction,
  colorCellByEvents,
  eventsTextColor,
}: {
  instruction: {
    id: number;
    key: string;
    originalKey: string;
    value: string | number | null;
  };
  colorCellByEvents: string[];
  eventsTextColor: string[];
}) => {
  const { colorCellByTemp, textEventColorInCell } = useDispatchColorsByEvent({
    colorCellByEvents,
    eventsTextColor,
  });
  return (
    <div
      style={{ textAlign: "left" }}
      key={instruction?.key + instruction?.value}
    >
      <ul className="flex flex-row ">
        <li
          className=" mb-2 text-sm flex justify-between items-center p-2 shadow-md rounded-md"
          style={{
            backgroundColor: colorCellByTemp(instruction.originalKey),
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
