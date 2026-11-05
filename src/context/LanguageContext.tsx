import { createContext, useContext } from "react";

export type Language = "en" | "pt";

type LanguageContextValue = {
	lang: Language;
	setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) throw new Error("useLanguage must be used inside LanguageContext");
	return context;
}
