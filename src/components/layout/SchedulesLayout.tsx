import { Navigate, Route, Routes } from "react-router-dom";
import SchedulesDetails from "../../components/schedules/SchedulesDetails";
import {  Suspense, useLayoutEffect } from "react";
import { bgGray200_700Color } from "../../utils/style";
import ScheduleViewWrapper from "../schedules/ScheduleViewWrapper";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../../ui/components/Loader";
import ErrorFallback from "../../ui/components/ErrorFallBack";
import { RecoilRoot } from "recoil";
import { TContentForModal } from "../schedules/types";

export const SchedulesLayout = ({
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
  withList,
  withLegend,
  eventTypeData,
  locale,
  modalContent,
}: {
  scheduleByEventPlace: {
    schedules: {
      id: string;
      title: string;
      type: string;
      day_slot_set: {
        days: number[];
        time_slot: {
          start: number;
          instruction: string;
        }[];
      }[];
    }[];
  };
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode: boolean;
  withList?: boolean;
  withLegend?: boolean;
  eventTypeData: {
    eventPlace_id: string;
    eventType_1: number | string;
    eventType_2: number | string;
    eventType_3: number | string;
    eventType_4: number | string;
    eventType_5: number | string;
    eventType_6: number | string;
    eventType_7: number | string;
  };
  locale: string;
  modalContent?: TContentForModal;
}) => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <RecoilRoot>
      <Routes>
        <Route
          path={`/`}
          element={
            <Suspense
              fallback={
                <div
                  className={`w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`}
                  style={{ transform: "scale(3)" }}
                >
                  <Loader />
                </div>
              }
            >
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                {withList ? (
                  <SchedulesDetails
                    locale={locale}
                    scheduleByEventPlace={scheduleByEventPlace}
                  />
                ) : (
                  <ScheduleViewWrapper
                    locale={locale}
                    eventTypeData={eventTypeData}
                    withList={withList}
                    isInDarkMode={isInDarkMode}
                    weekStartsOn={weekStartsOn}
                    scheduleByEventPlace={scheduleByEventPlace}
                    modalContent={modalContent}
                  />
                )}
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path={`/:scheduleId`}
          element={
            <Suspense
              fallback={
                <div
                  className={`w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`}
                  style={{ transform: "scale(3)" }}
                >
                  <Loader />
                </div>
              }
            >
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <ScheduleViewWrapper
                  locale={locale}
                  eventTypeData={eventTypeData}
                  withLegend={withLegend}
                  withList={withList}
                  isInDarkMode={isInDarkMode}
                  weekStartsOn={weekStartsOn}
                  scheduleByEventPlace={scheduleByEventPlace}
                  modalContent={modalContent}
                />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </RecoilRoot>
  );
};
