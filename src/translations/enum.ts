export enum LanguageKeys {
  en = "en",
  fr = "fr",
}

type Translation = Record<string, string>;

export type Messages = Record<LanguageKeys, Translation>;
