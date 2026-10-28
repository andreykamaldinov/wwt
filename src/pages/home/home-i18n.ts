import { Language } from '@shared/language.enum'
import { TranslationsNameSpaces } from '@shared/translation.enum'

import enConfirmApplyModal from '@filter-modal/confirm-apply-modal/i18n/en.json'
import enFilterSectionList from '@filter-modal/filter-section-list/i18n/en.json'
import enFilterModal from '@filter-modal/i18n/en.json'
import enHome from '@home/i18n/en.json'

export const homeI18n = {
	[Language.EN]: {
		[TranslationsNameSpaces.HOME]: enHome,
		[TranslationsNameSpaces.FILTER_MODAL]: enFilterModal,
		[TranslationsNameSpaces.FILTER_SECTION_LIST]: enFilterSectionList,
		[TranslationsNameSpaces.CONFIRM_APPLY_MODAL]: enConfirmApplyModal
	}
} as const
