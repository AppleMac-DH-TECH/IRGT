import { useContext } from "react";
import { LanguageContext } from "../../container/Language";

export function Text({ tid }) {

  const languageContext = useContext(LanguageContext);
  
  return languageContext.dictionary[tid] || tid;
};