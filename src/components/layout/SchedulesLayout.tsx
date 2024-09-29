import { ThemeProvider } from "../../context/ThemeContext";
import { Navigate, Route, Routes } from "react-router-dom";
import SchedulesDetails from "../../components/schedules/SchedulesDetails";
import { Suspense, useLayoutEffect } from "react";
import { bgGray200_700Color } from "../../utils/style";
import ScheduleViewWrapper from "../schedules/ScheduleViewWrapper";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../../ui/components/Loader";
import ErrorFallback from "../../ui/components/ErrorFallBack";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";

export const SchedulesLayout = ({
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
}: {
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: () => boolean;
}) => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <ThemeProvider>
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
                <SchedulesDetails scheduleByEventPlace={scheduleByEventPlace} />
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
                  isInDarkMode={isInDarkMode!}
                  weekStartsOn={weekStartsOn}
                  scheduleByEventPlace={scheduleByEventPlace}
                />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
