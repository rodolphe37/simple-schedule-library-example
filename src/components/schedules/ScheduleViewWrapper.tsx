import { useLocation, useNavigate, useParams } from "react-router-dom";
import ScheduleView from "./week-planning/ScheduleView";
import { useEffect, useState } from "react";

import { SelectOption } from "../../ui/selectBox";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import { useIntl } from "react-intl";
import BackArrowIcon from "../../ui/icons/BackArrowIcon";
import CustomSelect from "../../ui/customSelectComponent/CustomSelect";
import { TSelectedValueProps } from "../../ui/customSelectComponent/types";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";

const ScheduleViewWrapper = ({
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
}: {
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: () => boolean;
}) => {
  const navigate = useNavigate();

  const { scheduleId } = useParams<"scheduleId">();
  const location = useLocation();
  const intl = useIntl();
  const schedulesList = scheduleByEventPlace
    ? scheduleByEventPlace?.schedules
    : [];
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
      body.style.overflowY = "inherit";
      body.style.position = "inherit";
    }
    return () => {
      body.style.overflowY = "inherit";
      body.style.position = "inherit";
    };
  }, [height, location, scheduleId]);

  console.log("TEST", scheduleByEventPlace);

  return (
    <div className="pr-0 pl-2" style={{ padding: "4em" }}>
      <div>
        <button
          className="flex text-blue-600 hover:text-blue-800 dark:text-white p-2 mb-2 mt-1 appearance-none outline-none focus:outline-none border-none active:border-none focus:border-none hover:border-none"
          onClick={() => navigate(-1)}
        >
          <BackArrowIcon />
          <p className="ml-2">
            {intl.formatMessage({ id: "schedule.view.returnButton.text" })}
          </p>
        </button>
      </div>
      <div className=" relative w-full shadow rounded-t-md rounded-b-none bg-blue-600 dark:bg-gray-700 z-[250]">
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
        isInDarkMode={isInDarkMode!}
        weekStartsOn={weekStartsOn}
        scheduleByEventPlace={scheduleByEventPlace}
        scheduleId={scheduleId}
      />
    </div>
  );
};

export default ScheduleViewWrapper;
