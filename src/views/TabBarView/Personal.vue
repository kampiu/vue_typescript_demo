<template>
	<div class="personal-layout">
		Personal
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const HomeModule = namespace("home")

	@Component
	export default class Personal extends Vue {

	}
</script>

<style scoped>

</style>
