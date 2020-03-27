import { VueConstructor } from "vue"
// @ts-ignore
import TabBarComponent from "./index.vue"

const TabBar = {
	install: function(Vue: VueConstructor) {
		Vue.component("TabBar", TabBarComponent)
	}
}

export default TabBar
