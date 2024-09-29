import { useTheme } from "../context/useTheme";


const useDarkMode = () => {
  const { theme } = useTheme();

  const isDarkMode =
    theme === "dark" || localStorage.getItem("theme") === "dark" ? true : false;

  return { isDarkMode };
};

export default useDarkMode;
