import qa from "../data/qa.json";
import type { Language } from "../context/LanguageContext";

const normalize = (s: string) =>
	s
		.toLowerCase()
		.replace(/[^\p{L}\p{N} ]/gu, "")
		.trim();

export function findAnswer(text: string, lang: Language): string {
	const asked = normalize(text);
	// Answer in the language the question was asked in; fall back to the site language.
	for (const item of qa.qa) {
		for (const questionLang of ["en", "pt"] as const) {
			if (item.questions[questionLang].some((q) => normalize(q) === asked)) return item.answer[questionLang];
		}
	}
	return qa.fallback[lang];
}
