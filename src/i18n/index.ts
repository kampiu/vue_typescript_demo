import Vue from "vue"
import VueI18n from "vue-i18n"
import langZh from "./Lang/zh"
import langEn from "./Lang/en"
import langJo from "./Lang/jo"
import langKo from "./Lang/ko"
import langRu from "./Lang/ru"

Vue.use(VueI18n)

export default new VueI18n({
	locale: "zh-CN",
	messages: {
		"zh-CN": langZh,
		"en-US": langEn,
		"jo": langJo,
		"ko": langKo,
		"ru": langRu,
	}
})








