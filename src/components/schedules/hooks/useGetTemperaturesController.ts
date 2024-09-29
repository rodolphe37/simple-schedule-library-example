import { temperatures as data } from "../../../data";
import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { tempInstructionNames } from "../../schedules/week-planning/utils/helpers";
import { TemperatureTypes } from "../../schedules/types";

type ErrorResponse = {
  error_code: number | null;
  message: string;
};
export type temperatureArray = {
  key: string;
  value: string | number | null;
}[];

type tempWithNewNamesProps = {
  id: number;
  key: string;
  originalKey: string;
  value: number | string | null;
}[];

const useGetTemperaturesController = () => {
  const error = data === undefined;
  console.log("DATA", data);
  const intl = useIntl();
  const temperatures: temperatureArray = useMemo(() => [], []);
  let errorResponse: ErrorResponse = { error_code: null, message: "" };

  if (!error && data) {
    for (const [key, value] of Object.entries(data!)) {
      if (value) {
        temperatures.push({ key: key, value: value === null ? `_` : value });
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

  const [tempWithNewNames] = useState<tempWithNewNamesProps>([]);
  const numberOfTemperatures = 7;

  const orderedTemperatures = useMemo(
    () => () => {
      temperatures.filter((res) => {
        switch (res.key) {
          case TemperatureTypes.COMFORT_1:
            tempWithNewNames.push({
              id: 0,
              key: intl.formatMessage({
                id: tempInstructionNames.comfort_1,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case TemperatureTypes.COMFORT_2:
            tempWithNewNames.push({
              id: 1,
              key: intl.formatMessage({
                id: tempInstructionNames.comfort_2,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case TemperatureTypes.COMFORT_3:
            tempWithNewNames.push({
              id: 2,
              key: intl.formatMessage({
                id: tempInstructionNames.comfort_3,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case TemperatureTypes.COMFORT_4:
            tempWithNewNames.push({
              id: 3,
              key: intl.formatMessage({
                id: tempInstructionNames.comfort_4,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case TemperatureTypes.ECO:
            tempWithNewNames.push({
              id: 4,
              key: intl.formatMessage({
                id: tempInstructionNames.eco,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case TemperatureTypes.AWAY:
            tempWithNewNames.push({
              id: 5,
              key: intl.formatMessage({
                id: tempInstructionNames.away,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;
          case TemperatureTypes.FROST_PROTECTION:
            tempWithNewNames.push({
              id: 6,
              key: intl.formatMessage({
                id: tempInstructionNames.frost_protection,
              }),
              originalKey: res.key,
              value: res.value,
            });
            break;

          default:
            break;
        }

        return tempWithNewNames.sort(function (a, b) {
          return a.id - b.id;
        });
      });
    },
    [temperatures, tempWithNewNames, intl]
  );

  if (tempWithNewNames?.length < numberOfTemperatures) {
    orderedTemperatures();
  }

  return {
    errorResponse,
    temperatures,
    error,
    tempWithNewNames,
  };
};

export default useGetTemperaturesController;
