import { EventTypes } from "../types";

const useDispatchColorsByEvent = ({
  colorCellByEvents,
  eventsTextColor,
}: {
  colorCellByEvents: string[];
  eventsTextColor: string[];
}) => {
  type TColorByEventProps = string;

  const colorCellByTemp = (event: TColorByEventProps) =>
    event === EventTypes.EVENT_TYPE_1
      ? colorCellByEvents[0]
      : event === EventTypes.EVENT_TYPE_2
      ? colorCellByEvents[1]
      : event === EventTypes.EVENT_TYPE_3
      ? colorCellByEvents[2]
      : event === EventTypes.EVENT_TYPE_4
      ? colorCellByEvents[3]
      : event === EventTypes.EVENT_TYPE_5
      ? colorCellByEvents[4]
      : event === EventTypes.EVENT_TYPE_6
      ? colorCellByEvents[5]
      : event === EventTypes.EVENT_TYPE_7
      ? colorCellByEvents[6]
      : "";

  const textEventColorInCell = (event: TColorByEventProps) =>
    event === EventTypes.EVENT_TYPE_1
      ? eventsTextColor[0]
      : event === EventTypes.EVENT_TYPE_2
      ? eventsTextColor[1]
      : event === EventTypes.EVENT_TYPE_3
      ? eventsTextColor[2]
      : event === EventTypes.EVENT_TYPE_4
      ? eventsTextColor[3]
      : event === EventTypes.EVENT_TYPE_5
      ? eventsTextColor[4]
      : event === EventTypes.EVENT_TYPE_6
      ? eventsTextColor[5]
      : event === EventTypes.EVENT_TYPE_7
      ? eventsTextColor[6]
      : "";

  return { colorCellByTemp, textEventColorInCell };
};

export default useDispatchColorsByEvent;
