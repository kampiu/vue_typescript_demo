import Vue from "vue"
// @ts-ignore
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import "@/registerServiceWorker"
import "@/utils/iview"
import "@/plugins/web-ui"
import global from "@/plugins/global"
import VueMeta from "vue-meta"
import i18n from "@/i18n"

Vue.use(global)
Vue.use(VueMeta)

Vue.config.productionTip = false
require("@/mock")

new Vue({
	router,
	store,
	i18n,
	metaInfo() {
		return {
			title: "SEO标题",
			meta: [ {
				name: "keyword",
				content: "SEO 关键字"
			} ]
		}
	},
	render: (h) => h(App),
}).$mount("#app")
