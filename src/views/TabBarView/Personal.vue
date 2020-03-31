<template>
	<div class="personal-layout">
		<div class="box-nav" v-for="item in arr" :key="item" @click="onClick(item)">{{ item }}</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const CommonModule = namespace("common")

	@Component
	export default class Personal extends Vue {

		public arr: string[] = [ "1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7" ]
		public check: string[] = []

		public onClick(str: string) {
			if (this.check.includes(str)) {
				this.check.forEach((item, index) => {
					console.log(item, index)
					if(item === str){
						this.check.splice( index, 1)
						return
					}
				})
			} else {
				this.check.push(str)
			}
		}

	}
</script>

<style lang="less">
	.box-nav {
		width: 40px;
		height: 40px;
		display: flex;
		border: 1px solid #DDD;
		border-radius: 4px;
		align-items: center;
		justify-content: center;
		font-size: 14px;
	}
</style>
