<template>
	<div class="cart-layout">
		Cart
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const HomeModule = namespace("home")

	@Component
	export default class Cart extends Vue {

	}
</script>

<style scoped>

</style>
