import { useMemo, useState } from "react";
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

const useGetEventTypeController = (
  eventTypeData: TeventTypeData,
  locale: string
) => {
  const error = eventTypeData === undefined;

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
      message:
        locale === "fr"
          ? "Aucune bibliothèque de type d'évenements n'existe"
          : "No library of event types exists",
    };
  }

  const [eventWithNewNames] = useState<eventWithNewNamesProps>([]);
  const numberOfTemperatures = 7;

  const orderedTemperatures = useMemo(
    () => () => {
      eventType.filter((res) => {
        switch (res.key) {
          case EventTypes.EVENT_TYPE_1:
            eventWithNewNames.push({
              id: 0,
              key: locale === "fr" ? "Présence 1" : "Presence 1",
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_2:
            eventWithNewNames.push({
              id: 1,
              key: locale === "fr" ? "Présence 2" : "Presence 2",
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_3:
            eventWithNewNames.push({
              id: 2,
              key: locale === "fr" ? "Présence 3" : "Presence 3",
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_4:
            eventWithNewNames.push({
              id: 3,
              key: locale === "fr" ? "Présence 4" : "Presence 4",
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_5:
            eventWithNewNames.push({
              id: 4,
              key: locale === "fr" ? "Èco" : "Eco",
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_6:
            eventWithNewNames.push({
              id: 5,
              key: locale === "fr" ? "Asbence" : "Away",
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_7:
            eventWithNewNames.push({
              id: 6,
              key: locale === "fr" ? "Hors gel" : "frost protection",
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
    [eventType, eventWithNewNames, locale]
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
