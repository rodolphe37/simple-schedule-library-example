import useDarkMode from "./hooks/useDarkMode";
import useDarkModeTheme from "./context/useDarkModeTheme";

const useDarkModeExample = () => {
  const { isDarkMode } = useDarkMode();
  const { mode } = useDarkModeTheme();
  const isInDarkMode = isDarkMode || mode === "dark";

  return isInDarkMode;
};

export default useDarkModeExample;
