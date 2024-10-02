// style imports
import "./App.css";
import { bgGray200_700Color } from "./utils/style";
// Per dependencies
import { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// Import necessary for language (fr or en)- (for the example)
import { useLocale } from "./appComponents/context/useLocale";

// Import components
import { Loader } from "./appComponents/Loader";
import HomePage from "./HomePage";
import TestButtons from "./TestButtons";

// Import Fake data for demo
import { scheduleByEventPlace, eventTypeData } from "./data";
import { contentForModal } from "./dataCards";

// types for app elements 
import { TcolorCellByEvents, TeventsTextColor } from "./dataTypes";

// IMPORT FROM NPM LIBRARY -  it will be = import {SchedulesLayout} from "react-simple-schedules-viewer"
import { SchedulesLayout } from "./components/layout/SchedulesLayout";
import { useTheme } from "./appComponents/context/useTheme";


function App() {
  const { locale, setLocale } = useLocale();
  const location = useLocation();
  const weekStartsOn = 0;

  const [withLegend, setWithLegend] = useState(false);
  const [withList, setWithList] = useState(false);
  const [withDays, setWithDays] = useState(false);

  const { theme ,setTheme} = useTheme();

  const [isDarkMode, setIsDarkMode] =useState(theme ==="dark" ? true : false)

  useEffect(()=> {
    if(isDarkMode){
      setTheme("dark")
    }
    else if( !isDarkMode){
      setTheme("light")
    }
  })


  // the default order of colors in the array is: [eventType_1, eventType_2 , eventType_3", eventType_4",
  //  eventType_5, eventType_6, eventType_7]
  const colorCellByEvents: TcolorCellByEvents = [
    "#FFF2C4",
    "#FED7AD",
    "#DBFFE2",
    "#F6D1FF",
    "#A0ABC0",
    isDarkMode ? "#2D3648" : "#EDF0F7",
    "#B0DCFF",
  ];
  // the default order of colors in the array is: [eventType_1, eventType_2 , eventType_3", eventType_4",
  //  eventType_5, eventType_6, eventType_7]
  const eventsTextColor: TeventsTextColor = [
    "#B99100",
    "#D46E00",
    "#00B51E",
    "#F134F7",
    "#FFFFFF",
    "#a0abc0",
    "#0196EC",
  ];

  const params = {
    withList,
    setWithList,
    withLegend,
    setWithLegend,
    isDarkMode,
    setIsDarkMode,
    locale,
    setLocale,
    withDays,
    setWithDays,
  };

  return (
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
                    className={`w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`}
                    style={{ transform: "scale(3)" }}
                  >
                    <Loader />
                  </div>
                }
              >
                <SchedulesLayout
                  scheduleByEventPlace={scheduleByEventPlace}
                  weekStartsOn={weekStartsOn}
                  isInDarkMode={isDarkMode}
                  colorCellByEvents={colorCellByEvents}
                  eventsTextColor={eventsTextColor}
                  locale={locale}
                  eventTypeData={eventTypeData}
                  modalContent={contentForModal}
                  withDays={withDays}
                  withList={withList}
                  withLegend={withLegend}
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
