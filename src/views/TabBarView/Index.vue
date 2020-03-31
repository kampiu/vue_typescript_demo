<template>
	<div>
		<div class="header-layout">{{ $route.name }}</div>
		<keep-alive>
			<router-view id="tab-bar-view">sdf</router-view>
		</keep-alive>
		<tab-bar></tab-bar>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const CommonModule = namespace("common")

	@Component
	export default class TabBarView extends Vue {

	}
</script>

<style lang="less">
	#tab-bar-view {
		flex: auto;
		padding-top: 50px;
		overflow: hidden;
		display:flex;
	}
	.header-layout{
		width: 100%;
		height: 50px;
		position:absolute;
		left:0;
		top:0;
		flex: none;
		padding-left: 76px;
		color: #333;
		font-weight: 600;
		display:flex;
		align-items: center;
		font-size: 14px;
		border-bottom: 1px solid #F2F2F2;
	}
</style>
