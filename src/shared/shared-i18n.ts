import { Language } from '@shared/language.enum'
import enModal from '@shared/modal/i18n/en.json'
import { TranslationsNameSpaces } from '@shared/translation.enum'

export const sharedI18n = {
	[Language.EN]: {
		[TranslationsNameSpaces.MODAL]: enModal
	}
} as const
