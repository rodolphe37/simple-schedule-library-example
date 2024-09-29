import { useLocation, useNavigate, useParams } from "react-router-dom";
import ScheduleView from "./week-planning/ScheduleView";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";

import { SelectOption } from "../../ui/selectBox";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import { useIntl } from "react-intl";
import BackArrowIcon from "../../ui/icons/BackArrowIcon";
import CustomSelect from "../../ui/customSelectComponent/CustomSelect";
import { TSelectedValueProps } from "../../ui/customSelectComponent/types";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";
import ParametersDetails from "../legende-color/ParametersDetails";
import { TeventTypeData } from "./types";

const ScheduleViewWrapper = ({
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
  withList,
  withLegend,
  eventTypeData,
  locale,
}: {
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode: boolean;
  withList?: boolean;
  withLegend?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
}) => {
  const navigate = useNavigate();

  const { scheduleId } = useParams<"scheduleId">();
  const location = useLocation();
  const intl = useIntl();
  const schedulesList = useMemo(
    () => (scheduleByEventPlace ? scheduleByEventPlace?.schedules : []),
    [scheduleByEventPlace]
  );
  const { height } = useWindowDimensions();
  const options: SelectOption[] = [
    ...schedulesList.map((sch) => ({ label: sch.title, value: sch.id })),
  ];
  const [value, setValue] = useState<string | null | undefined>();
  const [selectedValue, setSelectedValue] =
    useState<TSelectedValueProps | null>(null);
  const selectedScheduleId = schedulesList.find(
    (sched) => sched.id === scheduleId
  )?.id;
  const selectedScheduleTitle = schedulesList.find(
    (sched) => sched.id === scheduleId
  )?.title;

  const onChange = (newValue: string) => {
    setValue(newValue);
    sessionStorage.removeItem("isScrolled");
    navigate(`/schedule/${newValue}`, {
      replace: true,
    });
  };

  const firstElement = schedulesList.find((res) => res.id)?.id;

  useLayoutEffect(() => {
    if (!withList && scheduleId === undefined) {
      navigate(`/schedule/${firstElement}`);
    }
  }, [navigate, schedulesList, withList, firstElement, scheduleId]);

  useEffect(() => {
    if (selectedScheduleId === scheduleId) {
      setValue(selectedScheduleId);
      if (selectedScheduleId && selectedScheduleTitle) {
        setSelectedValue({
          label: selectedScheduleTitle,
          value: selectedScheduleId,
        });
      }
    }
  }, [scheduleId, selectedScheduleId, selectedScheduleTitle]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (scheduleId && location.pathname.includes(scheduleId)) {
      body.style.overflowY = "hidden";
      body.style.position = "fixed";
    } else {
      body.style.overflowY = "scroll";
      body.style.position = "inherit";
    }
    return () => {
      body.style.overflowY = "inherit";
      body.style.position = "inherit";
    };
  }, [height, location, scheduleId]);

  return (
    <div className="pr-0 pl-2 w-full" style={{ padding: "4em" }}>
      <div>
        <button
          className="flex text-blue-600 hover:text-blue-800 dark:text-white p-2 mb-2 mt-1 appearance-none outline-none focus:outline-none border-none active:border-none focus:border-none hover:border-none"
          onClick={() => (withList ? navigate(-1) : navigate("/"))}
        >
          <BackArrowIcon />
          {withList ? (
            <p className="ml-2">
              {intl.formatMessage({
                id: "schedule.view.returnButton.text",
              })}
            </p>
          ) : (
            <p className="ml-2">
              {intl.formatMessage({
                id: "schedule.view.returnHomeButton.text",
              })}
            </p>
          )}
        </button>
      </div>
      <div
        className={`relative w-full shadow rounded-t-md rounded-b-none ${
          isInDarkMode ? "bg-gray-500/80" : "bg-blue-600"
        } z-[250]`}
      >
        <CustomSelect
          isInDarkMode={isInDarkMode}
          strokeColor="stroke-white"
          className="text-white"
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          options={options}
          placeHolder={schedulesList.find((sch) => sch.id === value)?.title}
          onChange={onChange}
        />
      </div>
      <ScheduleView
        locale={locale}
        eventTypeData={eventTypeData}
        isInDarkMode={isInDarkMode!}
        weekStartsOn={weekStartsOn}
        scheduleByEventPlace={scheduleByEventPlace}
        scheduleId={scheduleId}
      />
      {withLegend ? (
        <ParametersDetails
          isInDarkMode={isInDarkMode}
          eventTypeData={eventTypeData}
        />
      ) : null}
    </div>
  );
};

export default ScheduleViewWrapper;
