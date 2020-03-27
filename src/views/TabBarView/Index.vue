<template>
	<div>
		<keep-alive>
			<router-view id="tabbar-view"></router-view>
		</keep-alive>
		<tab-bar></tab-bar>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const HomeModule = namespace("home")

	@Component
	export default class TabBarView extends Vue {

	}
</script>

<style lang="less">

</style>
