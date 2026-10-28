import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { Language } from '@shared/language.enum'
import { sharedI18n } from '@shared/shared-i18n'
import { TranslationsNameSpaces } from '@shared/translation.enum'

import { homeI18n } from '@home/home-i18n'

export const resources = {
	[Language.EN]: {
		...sharedI18n[Language.EN],
		...homeI18n[Language.EN]
	}
} as const

const DEFAULT_LANGUAGE = Language.EN
export const DEFAULT_NAMESPACE = TranslationsNameSpaces.HOME

void i18n.use(initReactI18next).init({
	resources,
	lng: DEFAULT_LANGUAGE,
	fallbackLng: DEFAULT_LANGUAGE,
	defaultNS: DEFAULT_NAMESPACE,
	debug: import.meta.env.DEV && import.meta.env.MODE !== 'test',
	interpolation: {
		escapeValue: false
	}
})
