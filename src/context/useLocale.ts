import { useContext } from "react";
import { LocaleContext } from "./LocaleContext";

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (context === undefined) {
    throw new Error("This component must be used within a LocaleContext");
  }
  return context;
};
