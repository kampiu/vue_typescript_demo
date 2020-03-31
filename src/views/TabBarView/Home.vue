<template>
	<div class="home-layout">
		<div class="product-box" ref="ProductList">
			<div class="product-item" v-for="item in ProductList" :key="item.id">
				<div class="picture">
					<img :src="item.thumb" alt="">
				</div>
				<div class="info">
					<div class="title">{{ item.name }}</div>
					<div class="main">{{ item.address }}</div>
					<div class="desc">
						<span class="price">{{ item.money }}</span>
						<span class="buy">{{ item.sale }}人购买</span>
					</div>
				</div>
			</div>
			<div class="loading-box">
				<div class="tip"><span></span>正在加载</div>
			</div>
		</div>

	</div>
</template>
<style lang="less">
</style>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"
	import { IProduct } from "@/types/api"

	const CommonModule = namespace("common")

	@Component
	export default class Home extends Vue {

		public ProductList: IProduct[] = []
		public limit: number = 20
		public page: number = 1

		private created() {
			this.initData()
		}

		private activated() {
			// document.querySelectorAll(".product-box")[0].addEventListener("scroll", this.scroll)
		}

		private deactivated() {

		}

		public scroll(e: Event) {
			// if(e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight - 100){
			// 	console.log('更新列表')
			// }
		}

		private async initData() {
			const response = await this.$api["Product/GetProductList"]({
				page: this.page,
				limit: this.limit
			})
			if (response.status === 20000) {
				this.ProductList = response.data
				this.page += 1
			}
		}

	}
</script>

<style lang="less">
	.product-box {
		overflow-y: scroll;
		overflow-x: hidden;
		flex: none;
		width: 573px;
		padding: 0 20px;
	}

	.product-item {
		width: 152px;
		border-radius: 6px;
		background-color: #FFF;
		margin: 12px;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
		float: left;
		display: flex;
		flex-direction: column;
		transition: all linear .2s;
		cursor: pointer;
		outline: 0;

		&:hover {
			transform: translateY(-4px);

			img {
				transform: scale(1.2, 1.2);
			}
		}

		.picture {
			width: 100%;
			height: 152px;
			flex: none;
			position: relative;
			z-index: 10;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				transition: all linear 0.2s;
			}
		}

		.info {
			flex: auto;
			display: flex;
			flex-direction: column;
			padding: 8px 10px 12px 10px;
			justify-content: space-between;
		}

		.title {
			height: 40px;
			font-size: 14px;
			font-weight: 400;
			color: #333;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			line-height: 20px;
		}

		.main {
			font-size: 12px;
			line-height: 28px;
			font-weight: 400;
			color: #999;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
		}

		.desc {
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.price {
			font-size: 14px;
			font-weight: 800;
			color: #f15a53;
		}

		.buy {
			font-size: 12px;
			font-weight: 400;
			color: #999;
		}
	}

	@keyframes weuiLoading {
		0%{
			transform: rotate3d(0, 0, 1, 0deg);
		}
		100%{
			transform: rotate3d(0, 0, 1, 360deg);
		}
	}
	.loading-box{
		width: 100%;
		height: 40px;
		display:flex;
		align-items: center;
		justify-content: center;
		font-size: 12px;
		color: #333;
		padding-left: 40px;
		.tip{
			display:flex;
			align-items: center;
			font-size: 14px;
			color: #333;
		}
		span{
			content:"";
			width: 16px;
			height: 16px;
			display:flex;
			background-image: url("data:image/svg+xml;charset=utf8, <svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'><path fill='none' d='M0 0h100v100H0z'/><rect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/><rect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/><rect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/></svg>");
			background-position: center center;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			animation-name: weuiLoading;
			animation-duration: 1s;
			animation-timing-function: steps(12, end);
			animation-delay: 0s;
			animation-iteration-count: infinite;
			animation-direction: normal;
			animation-fill-mode: none;
			animation-play-state: running;
		}
	}
</style>
