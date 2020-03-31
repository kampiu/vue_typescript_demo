import mergeOptions from "./../../libs/mergeOptions"
import throttle from "./../../libs/throttle"
import Vue, { VueConstructor } from "vue"
// @ts-ignore
import AlertComponent from "./index.vue"

let $vm: AlertComponent
let watcher: { (): any; (): void }

type AlertDone = (show?: boolean) => void;

export type IAlertOptions = {
	title?: string;
	content?: string,
	cancelText?: string,
	confirmText?: string,
	onConfirm?: (e: typeof Vue, done: AlertDone) => void,
	onCancel?: (e: typeof Vue, done: AlertDone) => void,
};

export interface IAlert {
	cancel(done: AlertDone): void;
	
	confirm(done: AlertDone): void;
	
	isVisible(done: AlertDone): boolean
}

declare module "vue/types/vue" {
	interface Vue {
		$alert: (options?: IAlertOptions) => Promise<any>
		// $alert: (options?: IAlertOptions) => any
	}
	
	interface VueConstructor {
		$alert: (options?: IAlertOptions) => Promise<any>
		// $alert: (options?: IAlertOptions) => any
	}
}

const Toast = {
	install(vue: VueConstructor, pluginOptions: IAlertOptions = {}) {
		const Toast = vue.extend(AlertComponent)
		
		if (!$vm) {
			$vm = new Toast({
				el: document.createElement("div")
			})
			document.body.appendChild($vm.$el)
		}
		
		Vue.$alert = (options = {}) => {
			mergeOptions($vm, Object.assign({}, pluginOptions, options))
			$vm.show = true
			return new Promise((resolve, reject) => {
				if (options.onCancel || options.onConfirm) {
					watcher = $vm.$watch("status", (val: string) => {
						val === "fulfilled" && options.onConfirm && options.onConfirm($vm, $vm.status) && resolve($vm)
						val === "rejected" && options.onCancel && options.onCancel($vm, $vm.status) && reject($vm)
						$vm.show = false
						$vm.status = "pending"
					})
				}
			})
		}
		
		vue.mixin({
			created: function() {
				(this as Vue).$alert = Vue.$alert
			}
		})
	}
}

export default Toast
