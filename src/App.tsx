// APP DEMO IMPORT 
import "./App.css";
// Per dependencies
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";

// Import necessary for translation, language (fr or en) & dark mode - (for the example)
import { messages } from "./translations";
import { useLocale } from "./context/useLocale";
// import useDarkModeExample from "./useDarkModeTheme";
import { bgGray200_700Color } from "./utils/style";
// Import components
import { Loader } from "./ui/components/Loader";
import HomePage from "./HomePage";

// Import Fake data for demo 
import { scheduleByEventPlace, eventTypeData } from "./data";


// IMPORT FROM NPM LIBRARY -  it will be = import {SchedulesLayout} from "react-simple-schedules-viewer"
import { SchedulesLayout } from "./components/layout/SchedulesLayout";



function App() {
  const { locale } = useLocale();
  // const isInDarkMode = useDarkModeExample();
  const weekStartsOn = 0;

  return (
    <div className="App bg-gray-300">
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="fr"
      >
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
                  withList
                  // withLegend
                  isInDarkMode={false}
                  eventTypeData={eventTypeData}
                  weekStartsOn={weekStartsOn}
                  scheduleByEventPlace={scheduleByEventPlace}
                />
              </Suspense>
            }
          />
        </Routes>
      </IntlProvider>
    </div>
  );
}

export default App;
