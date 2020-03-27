<template>
	<keep-alive>
		<router-view id="app-view"></router-view>
	</keep-alive>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"

	@Component
	export default class App extends Vue {

	}
</script>

<style lang="less">
	#app-view{
		width: 100vw;
		height: 1200vh;
		display:flex;
	}
	// < 480
	@media (max-width: 480px) {
		#app-view{
			flex-direction: column;
			padding-left: 0;
			padding-bottom: .98rem;
		}
	}
	// > 480
	@media (min-width: 480px) {
		#app-view{
			flex-direction: row;
			padding-left: 56px;
			padding-bottom: 0;
		}
	}
</style>
