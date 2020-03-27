<template>
	<div class="seller-layout">
		Seller
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const HomeModule = namespace("home")

	@Component
	export default class Seller extends Vue {

	}
</script>

<style scoped>

</style>
