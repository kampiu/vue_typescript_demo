import mergeOptions from "./../../libs/mergeOptions"
import Vue, { VueConstructor } from "vue"
// @ts-ignore
import ToastComponent from "./index.vue"

let $vm: ToastComponent
let watcher: { (): any; (): void }

type ToastDone = (show?: boolean) => void;

export type IToastOptions = {
	value?: boolean;
	time?: number,
	type?: string,
	text?: string,
	onShow?: (e: typeof Vue, done: ToastDone) => void,
	onHide?: (e: typeof Vue, done: ToastDone) => void,
};

export interface IToast {
	show(options?: IToastOptions): void;
	
	text(text: string): void;
	
	hide(): void;
	
	isVisible(): boolean
}

declare module "vue/types/vue" {
	interface Vue {
		$toast: IToast
	}
	
	interface VueConstructor {
		$toast: IToast
	}
}

const Toast = {
	install(vue: VueConstructor, pluginOptions: IToastOptions = {}) {
		const Toast = vue.extend(ToastComponent)
		
		if (!$vm) {
			$vm = new Toast({
				el: document.createElement("div")
			})
			document.body.appendChild($vm.$el)
		}
		
		Vue.$toast = {
			show(options = {}) {
				watcher && watcher()
				mergeOptions($vm, Object.assign({}, pluginOptions, options))
				if (options.onShow || options.onHide) {
					watcher = $vm.$watch("show", (val: boolean) => {
						val && options.onShow && options.onShow($vm, $vm.show)
						!val && options.onHide && options.onHide($vm, $vm.show)
					})
				}
				$vm.show = true
			},
			text(text) {
				this.show({
					type: "text",
					text
				})
			},
			hide() {
				$vm.show = false
			},
			isVisible() {
				return $vm.show
			}
		}
		
		vue.mixin({
			created: function() {
				(this as Vue).$toast = Vue.$toast
			}
		})
	}
}

export default Toast
