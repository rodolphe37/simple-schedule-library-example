// style imports
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Import necessary for language (fr or en) & for theme (dark or light) - (for the example)
import { useLocale } from "./appComponents/context/useLocale";
import { useTheme } from "./appComponents/context/useTheme";

// Import components
import { Loader } from "./appComponents/Loader";
import HomePage from "./HomePage";
import TestButtons from "./TestButtons";

// Import Fake data for demo
import { scheduleByEventPlace, eventTypeData } from "./data";
import { contentForModal } from "./dataCards";

// types for app elements
import { TcolorCellByEvents, TeventsName, TeventsTextColor } from "./dataTypes";

// IMPORT FROM NPM LIBRARY 
import Schedule from "react-simple-schedule-viewer";

function App() {
  const { locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
    } else if (!isDarkMode) {
      setTheme("light");
    }
  });

  const location = useLocation();
  //  Variables for the ScheduleLayout component
  const weekStartsOn = 0;
  const [withList, setWithList] = useState(false);
  const [withDays, setWithDays] = useState(false);
  const withListReturnButton = true;
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark" ? true : false);


  // the default order of background colors in the array is
  const colorCellByEvents: TcolorCellByEvents = {
    eventType_1: "#FFECC8", // eventType_1 - required
    eventType_2: "#FFAACF", // eventType_2 - optional
    eventType_3: "#BFF6C3", // eventType_3 - optional
    eventType_4: "#CDC1FF", // eventType_4 - optional
    eventType_5: "#7BD3EA", // eventType_5 - optional
    eventType_6: isDarkMode ? "#2D3648" : "#f3f3f3", // eventType_6 - required - is always the away, closed or absent event
    eventType_7: "#FFDEFA", // eventType_7 - optional
  };
  // the default order of text colors in the array is
  const eventsTextColor: TeventsTextColor = {
    eventType_1: "#c8a026", // eventType_1 - required
    eventType_2: "#7b2e7b", // eventType_2 - optional
    eventType_3: "#0eb318", // eventType_3 - optional
    eventType_4: "#756AB6", // eventType_4 - optional
    eventType_5: "#1e646e", // eventType_5 - optional
    eventType_6: "#84878a", // eventType_6 - required - is always the away, closed or absent event
    eventType_7: "#B97A95", // eventType_7 - optional
  };

  // This is for TEMP & CALENDAR type of schedule, the names of all eventTypes.
  // (for the EVENT type, the name of the event is on the contentForModal - eventTitle)
  const eventsName: TeventsName = {
    eventType_1: "Présence 1",
    eventType_2: "Présence 2",
    eventType_3: "Présence 3",
    eventType_4: "Présence 4",
    eventType_5: "Éco",
    eventType_6: "Absence",
    eventType_7: "rendez-vous quotidien",
  };
  //  For french/English support both at the same time
  const eventsNameUs: TeventsName = {
    eventType_1: "Presence 1",
    eventType_2: "Presence 2",
    eventType_3: "Presence 3",
    eventType_4: "Presence 4",
    eventType_5: "Eco",
    eventType_6: "Away",
    eventType_7: "daily appointment",
  };

  const params = {
    withList,
    setWithList,
    isDarkMode,
    setIsDarkMode,
    locale,
    setLocale,
    withDays,
    setWithDays,
  };

  return ( 
    // This project uses tailwindcss classes - if you want to see an example without tailwindcss, 
    // let's look at the documentation (npm package description) for most simple examples.
    <div className="App flex-col pt-24 align-middle justify-start bg-gray-300 dark:bg-gray-600 pb-24">
      <div className="w-full h-[80vh] items-center justify-between flex flex-col">
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
                    className={`w-full flex flex-col justify-center items-center h-screen overflow-y-hidden bg-gray-200 dark:bg-gray-700`}
                    style={{ transform: "scale(3)" }}
                  >
                    <Loader />
                  </div>
                }
              >
                <Schedule
                  scheduleByEventPlace={scheduleByEventPlace}
                  weekStartsOn={weekStartsOn}
                  isInDarkMode={isDarkMode}
                  colorCellByEvents={colorCellByEvents}
                  eventsTextColor={eventsTextColor}
                  locale={locale}
                  eventsNameUs={eventsNameUs}
                  eventsName={eventsName}
                  eventTypeData={eventTypeData}
                  modalContent={contentForModal}
                  withDays={withDays}
                  withList={withList}
                  withListButtonName="Retourner à la page d'acceuil"
                  withListButtonNameUs="Go to HomePage"
                  withListReturnButton={withListReturnButton}
                />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
