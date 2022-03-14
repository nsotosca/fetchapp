import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// The translations
// (tip move them in a JSON file and import them,
// Or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es : {
    translation : {
      'name'             : 'Nombre',
      'birth_year'       : 'Fecha de nacimiento',
      'gender'           : 'Genero',
      'homeworld'        : 'Planeta',
      'characters.title' : 'Personajes',
      'male'             : 'M',
      'female'           : 'F',
      'none'             : 'N/S',
      'unknown'          : 'Desconocido'
    }
  }
};

i18n
  .use( initReactI18next ) // Passes i18n down to react-i18next
  .init( {
    resources,
    lng : 'es', // Language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // You can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // If you're using a language detector, do not define the lng option

    interpolation : {
      escapeValue : false // React already safes from xss
    }
  } );

export default i18n;