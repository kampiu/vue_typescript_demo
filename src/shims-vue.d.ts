import Vue from "vue"
import { IServices } from "@/types/service.d.ts"

declare module "*.vue" {
	export default Vue
}

declare module "vue/types/vue" {
	interface Vue {
		$api: IServices
	}
}

