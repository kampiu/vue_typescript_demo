<template>
	<div class="alert-box">
		<transition name="build-mask">
			<div v-show="show" class="mask-transparent" @click="CancelAction"></div>
		</transition>
		<transition name="dialog">
			<div v-show="show" class="box">
				<div class="title">弹窗标题弹窗标题</div>
				<div class="main">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内弹窗内容，</div>
				<div class="menu">
					<div class="menu-button cancel" @click="CancelAction">取消</div>
					<div class="menu-button confirm" @click="ConfirmAction">确定</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from "vue-property-decorator"

	@Component
	export default class Alert extends Vue {

		@Prop({ default: "提示" }) public title: string
		@Prop({ default: "" }) public content: string
		@Prop({ default: "取消" }) public cancelText: string
		@Prop({ default: "确定" }) public confirmText: string

		public status: string = "pending"
		public show: boolean = false

		public ConfirmAction() {
			this.status = "fulfilled"
		}

		public CancelAction() {
			this.status = "rejected"
		}

	}
</script>

<style lang="less">
	.alert-box {
		.mask-transparent {
			position: fixed;
			z-index: 10000;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(17, 17, 17, 0.7);
		}

		.box {
			width: 280px;
			min-height: 80px;
			display: flex;
			flex-direction: column;
			position: fixed;
			z-index: 99999;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #FFF;
			border-radius: 12px;
			overflow: hidden;
			transition: all linear 0.2s;
		}

		.title {
			padding: 18px 16px 16px;
			font-weight: 600;
			font-size: 16px;
			line-height: 1.4;
			text-align: center;
		}

		.main {
			min-height: 40px;
			text-align: center;
			font-size: 14px;
			color: #333;
			padding: 0 24px;
			margin-bottom: 18px;
			word-wrap: break-word;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			line-height: 18px;
		}

		.menu {
			width: 100%;
			height: 40px;
			display: flex;
			position: relative;

			&:after {
				content: " ";
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				height: 1px;
				border-top: 1px solid rgba(0, 0, 0, 0.1);
				color: rgba(0, 0, 0, 0.1);
				-webkit-transform-origin: 0 0;
				transform-origin: 0 0;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
			}
		}

		.menu-button {
			flex-grow: 1;
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all linear 0.2s;
			font-size: 14px;
			font-weight: 600;
			cursor: pointer;

			&:active {
				background-color: #ECECEC;
			}
		}

		.cancel {
			color: #576b95;
		}

		.confirm {
			color: #06AE56;
		}
	}

	.dialog-enter-active {
		animation: dialog-in .5s;
	}

	.dialog-leave-active {
		animation: dialog-out .3s;
	}

	@keyframes dialog-in {
		0% {
			transform: translate(-50%, -60%);
			opacity: 0;
		}
		100% {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
	}

	@keyframes dialog-out {
		0% {
			transform: translate(-50%, -50%);
			opacity: 1;
		}
		100% {
			transform: translate(-50%, -60%);
			opacity: 0;
		}
	}

	.build-mask-enter, .build-mask-leave-active {
		opacity: 0;
	}

	.build-mask-leave-active, .build-mask-enter-active {
		transition: opacity 300ms;
	}

</style>
