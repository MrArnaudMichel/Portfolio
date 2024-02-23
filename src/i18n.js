import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import detector from "i18next-browser-languagedetector";
import translationEN from "./locales/language/en/translation.json";
import translationFR from "./locales/language/fr/translation.json";

// the translations
const resources = {
	en: {
		translation: translationEN
	},
	fr: {
		translation: translationFR
	}
};

i18n
	.use(detector)
	.use(initReactI18next) // pass i18n instance to react-i18next
	.init({
		resources,
		fallbackLng: "fr",
		debug: true,
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie']
		},
		interpolation: {
			escapeValue: false
		}
	})
	.then(() => {
		console.log(i18n.language); // logs the detected language
	});
export default i18n;
