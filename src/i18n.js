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
		lng: "fr",
		fallbackLng: "en", // use en if detected lng is not available
		debug: true,
		detection: {
			order: ['navigator', 'queryString', 'cookie'], // Change l'ordre de détection
			cache: ['cookie']
		},
		interpolation: {
			escapeValue: false
		}
	})
	.then(() => {
		console.log("i18n initialized");
		console.log(i18n.language);
		console.log(i18n.services.languageDetector.detectors);
		console.log(i18n.services.languageDetector.caches);
		console.log(i18n.services.languageDetector.lookup);
		console.log(i18n.services.languageDetector.order);
		console.log(i18n.services.languageDetector);
		// logs the detected language affiche aussi le retour des moyens de détection

	});

export default i18n;
