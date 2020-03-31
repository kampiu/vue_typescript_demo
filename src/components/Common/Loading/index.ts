import mergeOptions from "./../../libs/mergeOptions"
import Vue, { VueConstructor } from "vue"
// @ts-ignore
import LoadingComponent from "./index.vue"

let $vm: LoadingComponent
let watcher: { (): any; (): void }
let delayTime: number | null | undefined = null

type LoadingDone = (show?: boolean) => void;

export type ILoadingOptions = {
	text?: string;
	onShow?: (e: typeof Vue, done: LoadingDone) => void,
	onHide?: Function,
	delay?: number | undefined
};

export interface ILoading {
	show(options?: ILoadingOptions): void;
	
	hide(): void;
	
	isVisible(): boolean
}

declare module "vue/types/vue" {
	interface Vue {
		$loading: ILoading
	}
	
	interface VueConstructor {
		$loading: ILoading
	}
}

const Loading = {
	install: function(Vue: VueConstructor, pluginOptions: ILoadingOptions) {
		const Loading = Vue.extend(LoadingComponent)
		
		if (!$vm) {
			$vm = new Loading({
				el: document.createElement("div")
			})
			document.body.appendChild($vm.$el)
		}
		
		Vue.$loading = {
			show(options = {}) {
				watcher && watcher()
				
				mergeOptions($vm, Object.assign({}, pluginOptions, options))
				
				if (options.onShow || options.onHide) {
					watcher = $vm.$watch("show", (val: boolean) => {
						val && options.onShow && options.onShow($vm, $vm.show)
						!val && options.onHide && options.onHide($vm, $vm.show)
					})
				}
				delayTime && clearTimeout(delayTime)
				delayTime = setTimeout(() => {
					$vm.show = true
				}, options.delay || 0)
			},
			hide() {
				if (delayTime) {
					clearTimeout(delayTime)
					delayTime = null
				}
				$vm.show = false
			},
			isVisible() {
				return $vm.show
			}
		}
		
		Vue.mixin({
			created: function() {
				(this as Vue).$loading = Vue.$loading
			}
		})
	}
}

export default Loading
