import Vue from "vue"
// @ts-ignore
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import "@/registerServiceWorker"
import "@/utils/iview"
import global from "@/plugins/global"
import "@/plugins/web-ui"
import VueMeta from "vue-meta"

Vue.use(global)
Vue.use(VueMeta)


Vue.config.productionTip = false

new Vue({
	router,
	store,
	// metaInfo() {
	// 	return {
	// 		title: 'SEO标题',
	// 		meta: [ {
	// 			title: 'keyword',
	// 			content: 'SEO 关键字'
	// 		} ]
	// 	};
	// },
	render: (h) => h(App),
}).$mount("#app")
