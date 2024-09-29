
import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { eventInstructionNames } from "../week-planning/utils/helpers";
import { EventTypes, TeventTypeData } from "../types";

type ErrorResponse = {
  error_code: number | null;
  message: string;
};
export type eventTypeArray = {
  key: string;
  value: string | number | null;
}[];

type eventWithNewNamesProps = {
  id: number;
  key: string;
  originalKey: string;
  value: number | string | null;
}[];

const useGetEventTypeController = (eventTypeData:TeventTypeData) => {
  const error = eventTypeData === undefined;
  console.log("DATA", eventTypeData);
  const intl = useIntl();
  const eventType: eventTypeArray = useMemo(() => [], []);
  let errorResponse: ErrorResponse = { error_code: null, message: "" };

  if (!error && eventTypeData) {
    for (const [key, value] of Object.entries(eventTypeData!)) {
      if (value) {
        eventType.push({ key: key, value: value === null ? `_` : value });
      }
    }
  } else if (error) {
    errorResponse = {
      error_code: 404,
      message: intl.formatMessage({
        id: "noTemperatureInThisBuilding.error.text",
      }),
    };
  }

  const [eventWithNewNames] = useState<eventWithNewNamesProps>([]);
  const numberOfTemperatures = 7;

  const orderedTemperatures = useMemo(
    () => () => {
      eventType.filter((res) => {
        switch (res.key) {
          case EventTypes.COMFORT_1:
            eventWithNewNames.push({
              id: 0,
              key: intl.formatMessage({
                id: eventInstructionNames.comfort_1,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.COMFORT_2:
            eventWithNewNames.push({
              id: 1,
              key: intl.formatMessage({
                id: eventInstructionNames.comfort_2,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.COMFORT_3:
            eventWithNewNames.push({
              id: 2,
              key: intl.formatMessage({
                id: eventInstructionNames.comfort_3,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.COMFORT_4:
            eventWithNewNames.push({
              id: 3,
              key: intl.formatMessage({
                id: eventInstructionNames.comfort_4,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.ECO:
            eventWithNewNames.push({
              id: 4,
              key: intl.formatMessage({
                id: eventInstructionNames.eco,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.AWAY:
            eventWithNewNames.push({
              id: 5,
              key: intl.formatMessage({
                id: eventInstructionNames.away,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.FROST_PROTECTION:
            eventWithNewNames.push({
              id: 6,
              key: intl.formatMessage({
                id: eventInstructionNames.frost_protection,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;

          default:
            break;
        }

        return eventWithNewNames.sort(function (a, b) {
          return a.id - b.id;
        });
      });
    },
    [eventType, eventWithNewNames, intl]
  );

  if (eventWithNewNames?.length < numberOfTemperatures) {
    orderedTemperatures();
  }

  return {
    errorResponse,
    eventType,
    error,
    eventWithNewNames,
  };
};

export default useGetEventTypeController;
