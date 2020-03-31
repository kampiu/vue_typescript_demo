<!--
 * @Author: your name
 * @Date: 2020-03-03 16:10:34
 * @LastEditTime: 2020-03-04 15:23:28
 * @LastEditors: Please set LastEditors
 * @Description: 列表返回按钮组件
 * @FilePath: \bkqw_crm\src\components\Common\Back\index.vue
 -->

<template>
	<div class="tabbar">
		<router-link v-for="(item, index) in tabbarRouter" :key="item.id + '_' + index" :to="{name: item.route}" class="tabbar-item">
			<div class="tabbar-icon" :style="{backgroundImage: 'url(' + ($route.name === item.route ? item.activeIcon : item.icon) + ')'}"></div>
			<span>{{ item.name }}</span>
		</router-link>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"

	interface ITabbarRouter {
		id: number,
		name: string,
		icon: string,
		activeIcon: string,
		route: string
	}

	@Component
	export default class Tabbar extends Vue {

		private tabbarRouter: ITabbarRouter[] = [ {
			id: 1,
			name: "Mock",
			icon: "https://lib.billson.club/images/tabbar_home_icon.png",
			activeIcon: "https://lib.billson.club/images/tabbar_home_icon_active.png",
			route: "Home"
		}, {
			id: 2,
			name: "i18n",
			icon: "https://lib.billson.club/images/tabbar_cate_icon.png",
			activeIcon: "https://lib.billson.club/images/tabbar_cate_icon_active.png",
			route: "Query"
		}, {
			id: 3,
			name: "商家",
			icon: "https://lib.billson.club/images/tabbar_seller_icon.png",
			activeIcon: "https://lib.billson.club/images/tabbar_seller_icon_active.png",
			route: "Seller"
		}, {
			id: 4,
			name: "购物车",
			icon: "https://lib.billson.club/images/tabbar_cart_icon.png",
			activeIcon: "https://lib.billson.club/images/tabbar_cart_icon_active.png",
			route: "Cart"
		}, {
			id: 5,
			name: "我的",
			icon: "https://lib.billson.club/images/tabbar_personal_icon.png",
			activeIcon: "https://lib.billson.club/images/tabbar_personal_icon_active.png",
			route: "Personal"
		} ]


	}
</script>

<style lang="less">
	.tabbar {
		background-color: #FFF;

		a:hover {
			background-color: #F3F3F3;
		}
	}

	// < 480
	@media (max-width: 480px) {
		.tabbar {
			width: 100%;
			height: .98rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			border-top: .02rem solid #efefef;
			flex: 0 0 auto;
			align-self: flex-end;
			position: fixed;
			flex: none;
			left: 0;
			bottom: 0;
			z-index: 1000;

			a {
				width: 20%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				transition: all linear .1s;
				cursor: pointer;
				outline: 0;
				color: #333;
			}

			div {
				width: .48rem;
				height: .48rem;
				overflow: hidden;
				background-position: center center;
				background-repeat: no-repeat;
				background-size: 0.48rem 0.48rem;
			}

			span {
				font-size: .2rem;
				font-weight: 800;
				line-height: .28rem;
				color: #333;
			}
		}
	}

	// > 480
	@media (min-width: 480px) {
		.tabbar {
			/*width: 280px;*/
			/*height: 44px;*/
			width: 56px;
			height: 100vh;
			position: fixed;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
			z-index: 1000;
			display: flex;
			flex-direction: column;
			flex: none;

			a {
				width: 100%;
				height: 56px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				transition: all linear .1s;
				cursor: pointer;
				outline: 0;
				color: #333;
				border-bottom: 1px solid #F2F2F2;
			}

			div {
				width: 20px;
				height: 20px;
				overflow: hidden;
				background-position: center center;
				background-repeat: no-repeat;
				background-size: 20px 20px;
			}

			span {
				font-size: 12px;
				font-weight: 800;
				line-height: 1.3em;
				color: #333;
			}
		}
	}
</style>

