export enum Language {
  HTML = "html",
  JAVASCRIPT = "javascript",
  REACT = "react",
}

export const ICON_LANGUAGE: Record<Language, string> = {
  [Language.HTML]: "/assets/svg/html.svg",
  [Language.JAVASCRIPT]: "/assets/svg/js.svg",
  [Language.REACT]: "/assets/svg/react.svg",
};

export const LANGUAGE_TITLE: Record<Language, string> = {
  [Language.HTML]: "HTML",
  [Language.JAVASCRIPT]: "JavaScript",
  [Language.REACT]: "React",
};
