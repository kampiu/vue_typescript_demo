<template>
	<transition :name="transition">
		<div class="loading-box" v-show="show">
			<div class="mask-transparent"></div>
			<div class="box">
				<i class="icon"></i>
				<p class="text" v-if="text">{{ text || 'loading' }}</p>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
	import { Component, Vue, Prop, Watch, Model, Emit } from "vue-property-decorator"

	@Component
	export default class Loading extends Vue {

		@Prop({ default: "" }) public text: string
		@Prop({ default: "mask-layout" }) public transition: string

		@Model("change", {default: false})
		public show: boolean

		@Watch("show")
		ShowChange(val: boolean) {
			this.EmitShow(val)
		}

		@Emit("update:show")
		EmitShow(val: boolean) {
			return val
		}

	}
</script>

<style lang="less">
	.loading-box {
		.box {
			position: fixed;
			z-index: 999999999;
			width: 90px;
			min-height: 90px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: rgba(17, 17, 17, 0.7);
			text-align: center;
			border-radius: 5px;
			color: #FFFFFF;
			display:flex;
			flex-direction: column;
			align-items: center;
			padding: 12px 0;
		}

		.mask-transparent {
			position: fixed;
			z-index: 1000;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			width: 100vw;
			height: 100vh;
		}

		.icon {
			width: 32px;
			height: 32px;
			margin: 10px 0;
			display: inline-block;
			vertical-align: middle;
			animation: Loading 1s steps(12, end) infinite;
			background: transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;
			background-size: 100%;
		}

		.text {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			font-size: 12px;
		}
	}

	@keyframes Loading {
		0% {
			transform: rotate3d(0, 0, 1, 0deg);
		}

		100% {
			transform: rotate3d(0, 0, 1, 360deg);
		}
	}

	.mask-layout-enter, .mask-layout-leave-active,
	.mask-layout-leave-active, .mask-layout-enter-active {
		position: relative;
		z-index: 1;
	}

	.mask-layout-enter, .mask-layout-leave-active {
		opacity: 0;
	}

	.mask-layout-leave-active, .mask-layout-enter-active {
		transition: opacity 300ms;
	}

</style>
