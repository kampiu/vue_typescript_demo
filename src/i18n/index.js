import Vue from 'vue'
import VueI18n from 'vue-i18n'
import langZh from './Modules/zh'
import langEn from './Modules/en'
import langJo from './Modules/jo'
import langKo from './Modules/ko'
import langRu from './Modules/ru'

Vue.use(VueI18n)

export default new VueI18n({
	locale: 'zh-CN',
	messages: {
		'zh-CN': langZh,
		'en-US': langEn,
		'jo': langJo,
		'ko': langKo,
		'ru': langRu,
	}
})








