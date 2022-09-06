import React, { useContext } from 'react';
import { languageOptions } from '../languages';
// import { LanguageContext } from '../containers/Language';
import { LanguageContext } from './Language';
import { Text } from '../languages/Text/Text';
export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  // set selected language by calling context method
  const handleLanguageChange = e => userLanguageChange(e.target.value);
  return (
    // <select
    //   onChange={handleLanguageChange}
    //   value={userLanguage}
    // >
    //   {Object.entries(languageOptions).map(([id, name]) => (
    //     <option key={id} value={id}>{name}</option>
    //   ))}
    // </select>
    <>
      <div className='flex items-center gap-2'>
        <label  className="block  font-medium text-white font-mono"><Text tid={"language"}/></label>
        <select id="countries"
          className=" bg-transparent border border-blue text-white   rounded-lg block w-full font-mono"
          onChange={handleLanguageChange}
            value={userLanguage}
        >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id} className=" bg-[rgb(255,153,9)]    font-mono" ><Text tid={name} /></option>
        ))}
      </select>
      </div>
    </>
  );
};