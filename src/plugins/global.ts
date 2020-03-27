import Vue from "vue"
import { Component } from "vue-property-decorator"
import services from "@/services"

Component.registerHooks([
	"beforeRouteEnter",
	"beforeRouteLeave",
	"beforeRouteUpdate",
])

export default {
	install(vue: typeof Vue) {
		vue.prototype.$api = services
	}
}





