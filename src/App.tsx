// style imports
import "./App.css";
import { bgGray200_700Color } from "./utils/style";
// Per dependencies
import { Suspense, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// Import necessary for language (fr or en)- (for the example)
import { useLocale } from "./context/useLocale";

// Import components
import { Loader } from "./ui/components/Loader";
import HomePage from "./HomePage";
import TestButtons from "./TestButtons";

// Import Fake data for demo
import { scheduleByEventPlace, eventTypeData } from "./data";
import { contentForModal } from "./dataCards";

// IMPORT FROM NPM LIBRARY -  it will be = import {SchedulesLayout} from "react-simple-schedules-viewer"
import { SchedulesLayout } from "./components/layout/SchedulesLayout";

function App() {
  const { locale } = useLocale();
  const location = useLocation();
  const weekStartsOn = 0;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [withLegend, setWithLegend] = useState(false);
  const [withList, setWithList] = useState(false);
  const [withDays, setWithDays] = useState(false);

  const params = {
    withList,
    setWithList,
    withLegend,
    setWithLegend,
    isDarkMode,
    setIsDarkMode,
    locale,
    withDays,
    setWithDays,
  };

  return (
    <div className="App flex-col pt-24 justify-evenly bg-gray-300 pb-24">
      {!location.pathname.includes("schedule") ? (
        <TestButtons {...params} />
      ) : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/schedule/*"
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
              <SchedulesLayout
                withDays={withDays}
                withList={withList}
                withLegend={withLegend}
                locale={locale}
                isInDarkMode={isDarkMode}
                eventTypeData={eventTypeData}
                weekStartsOn={weekStartsOn}
                scheduleByEventPlace={scheduleByEventPlace}
                modalContent={contentForModal}
              />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
