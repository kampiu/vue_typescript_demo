<template>
	<div class="home-layout">
		Home

	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const HomeModule = namespace("home")

	@Component
	export default class Home extends Vue {

	}
</script>

<style lang="less">

</style>
