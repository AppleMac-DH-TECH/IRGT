import React, { useState } from 'react';  
import { createContext } from 'react';
import { languageOptions, dictionaryList } from '../languages';
// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  const defaultLanguage = window.localStorage.getItem('rcml-lang');
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      setUserLanguage(selected);
      window.localStorage.setItem('rcml-lang', selected);
    }
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};