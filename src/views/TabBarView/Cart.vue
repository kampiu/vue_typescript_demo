<template>
	<div class="cart-layout">
		<div @click="asd" style="height: 60px;font-size: 30px">点击我加载</div>
<!--		<Alert></Alert>-->
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const CommonModule = namespace("common")

	@Component
	export default class Cart extends Vue {

		public created() {

		}

		asd() {
			this.$alert({
				title: "加载中",
				content: '内容有点少，将就点吧',
				cancelText: '微信取消',
				confirmText: '微信确定',
				onConfirm(vm, done){
					console.log(vm, done, 'callback -- 我点击了确定')
				},
				onCancel(vm, done){
					console.log(vm, done, 'callback -- 我点击了取消')
				}
			})
			// this.$loading.show({
			// 	text: "加载中",
			// 	onShow(vm, done){
			// 		console.log(vm, done, 'callback')
			// 	}
			// })
			// let that = this
			// this.$toast.show({
			// 	text: "加载中",
			// 	time: 2000,
			// 	onShow(vm, done){
			// 		console.log(vm, done, 'onShow -- callback')
			// 	},
			// 	onHide(vm, done){
			// 		console.log(vm, done, 'onHide -- callback')
			// 		that.$loading.hide()
			// 	}
			// })
		}

	}
</script>

<style lang="less">

</style>
