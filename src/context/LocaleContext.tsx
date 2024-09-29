import React, { useState, useEffect } from "react";
import { messages } from "../translations";
import { LanguageKeys } from "../translations/enum";

export const LocaleContext = React.createContext<
  | {
      locale: LanguageKeys;
      setLocale: React.Dispatch<React.SetStateAction<LanguageKeys>>;
    }
  | undefined
>(undefined);

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<LanguageKeys>(
    () => (localStorage.getItem("locale") ?? "fr") as LanguageKeys
  );

  useEffect(() => {
    if (locale) return;

    const navigatorLanguage = navigator.language.split(/[-_]/)[0];

    setLocale(
      (Object.keys(messages).includes(navigatorLanguage)
        ? navigatorLanguage
        : "fr") as LanguageKeys
    );
  }, [locale, setLocale]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleProvider };
