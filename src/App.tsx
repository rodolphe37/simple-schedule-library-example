import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./ui/components/Loader";
import { SchedulesLayout } from "./components/layout/SchedulesLayout";
import HomePage from "./HomePage";
import { bgGray200_700Color } from "./utils/style";
import { IntlProvider } from "react-intl";
import { messages } from "./translations";
import { useLocale } from "./context/useLocale";
import { scheduleByEventPlace } from "./data";
import useDarkModeExample from "./useDarkModeTheme";

function App() {
  const { locale } = useLocale();
  const isInDarkMode = useDarkModeExample();
  const weekStartsOn = 0;

  return (
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
                isInDarkMode={isInDarkMode}
                weekStartsOn={weekStartsOn}
                scheduleByEventPlace={scheduleByEventPlace}
              />
            </Suspense>
          }
        />
      </Routes>
    </IntlProvider>
  );
}

export default App;
