import Vue, { ComponentOptions } from "vue"
import { IServices } from "@/types/service.d.ts"
import VueI18n from "vue-i18n"

declare module "*.vue" {
	export default Vue
}

declare module "vue/types/vue" {
	interface Vue {
		$api: IServices
	}
}

declare module "vue/types/options" {
	interface ComponentOptions<V extends Vue> {
		i18n?: {
			messages?: VueI18n.LocaleMessages;
			dateTimeFormats?: VueI18n.DateTimeFormats;
			numberFormats?: VueI18n.NumberFormats;
			sharedMessages?: VueI18n.LocaleMessages;
		};
	}
}

