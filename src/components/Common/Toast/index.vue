<template>
	<div class="toast-box">
		<div class="mask-transparent" v-show="show"></div>
		<transition name="mask-layout">
			<div class="box" v-show="show">
				<i v-show="type !== 'text'" :class="IconClass"></i>
				<p class="text">{{ text || '你好' }}</p>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator"

	@Component
	export default class Toast extends Vue {

		@Prop({ default: false }) public value: boolean
		@Prop({ default: 'text' }) public type: string
		@Prop({ default: 2000 }) public time: number
		@Prop({ default: "" }) public text: string

		public show: boolean = false
		public timeout: any

		@Watch("show")
		ShowChange(val: boolean) {
			if (val) {
				this.InputEmit(true)
				this.OnShowEmit()

				clearTimeout(this.timeout)
				this.timeout = setTimeout(() => {
					this.show = false
					this.InputEmit(false)
					this.OnHideEmit()
				}, this.time)
			}
		}

		@Emit('input')
		InputEmit(args: boolean){
			return args
		}

		@Emit('on-show')
		OnShowEmit(){

		}

		@Emit('on-hide')
		OnHideEmit(){

		}

		get IconClass(): string{
			return this.type !== 'text' ? `${this.type} icon` : 'icon'
		}

		@Watch("value")
		ValueChange(val: boolean) {
			this.show = val
		}


	}
</script>

<style lang="less">
	.toast-box {
		.box {
			position: fixed;
			z-index: 9999;
			width: 90px;
			min-height: 32px;
			display: flex;
			flex-direction: column;
			align-items: center;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: rgba(17, 17, 17, 0.7);
			text-align: center;
			border-radius: 5px;
			color: #FFFFFF;
			padding: 10px 0;
		}

		.icon {
			margin: 0 0 12px 0;
			background-color: pink;
			height: 40px;
			width: 40px;
			flex: none;
		}


		.mask-transparent {
			position: fixed;
			z-index: 1000;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}


		.text {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 12px;
		}

	}

	.mask-layout-enter-active, .mask-layout-leave-active {
		opacity: 1;
		transition: opacity linear 0.2s;
	}

	.mask-layout-enter, .mask-layout-leave-to {
		opacity: 0;
	}

	.vux-mask-enter, .vux-mask-leave-active {
		opacity: 0;
	}

	.vux-mask-leave-active, .vux-mask-enter-active {
		transition: opacity 300ms;
	}
</style>
