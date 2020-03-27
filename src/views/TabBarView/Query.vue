<template>
	<div class="query-layout">
		Query
<!--		<div class="language-box">-->
<!--			<div class="tab-menu">-->
<!--				<span v-for="item in langs" :key="item.id" @click="changeLang(item.lang)">{{ item.title }}</span>-->
<!--			</div>-->
<!--			<div class="form">-->
<!--				<div class="item">-->
<!--					<span class="title">{{ $t('query.title') }}</span>-->
<!--					<span class="content">{{ $t('query.newsA') }}</span>-->
<!--				</div>-->
<!--				<div class="item">-->
<!--					<span class="title">{{ $t('query.title') }}</span>-->
<!--					<span class="content">{{ $t('query.newsB') }}</span>-->
<!--				</div>-->
<!--				<div class="item">-->
<!--					<span class="title">{{ $t('query.title') }}</span>-->
<!--					<span class="content">{{ $t('query.newsC') }}</span>-->
<!--				</div>-->
<!--				<div class="item">-->
<!--					<span class="title">{{ $t('query.title') }}</span>-->
<!--					<span class="content">{{ $t('query.newsD') }}</span>-->
<!--				</div>-->
<!--				<div class="item">-->
<!--					<span class="title">{{ $t('query.title') }}</span>-->
<!--					<span class="content">{{ $t('query.newsE') }}</span>-->
<!--				</div>-->
<!--				<div class="item">-->
<!--					<span class="title">{{ $t('query.title') }}</span>-->
<!--					<span class="content">{{ $t('query.newsF') }}</span>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
	</div>
</template>
<script lang="ts">
	import { Component, Vue } from "vue-property-decorator"
	import { namespace } from "vuex-class"

	const HomeModule = namespace("home")

	@Component
	export default class Query extends Vue {

	}
</script>

<style lang="less">
	.language-box {
		margin-top: 5vh;
		width: 100%;
		height: 80vh;
		overflow: hidden;
		padding: 0 120px;
		font-size: 14px;
	}

	.tab-menu {
		width: 100%;
		height: 56px;
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #333;

		span {
			margin: 0 12px;
			border: 1px solid #ddd;
			border-radius: 4px;
			font-size: 14px;
			padding: 2px 12px;
			cursor: pointer;
		}
	}

	.form {
		width: 100%;
		overflow-y: scroll;

		.item {
			min-height: 32px;
			display: Flex;
			align-items: flex-start;

			&:nth-child(even) {
				background-color: #FFF;
			}

			&:nth-child(odd) {
				background-color: #F8F8F8;
			}
		}

		.title {
			min-width: 120px;
			height: 32px;
			font-size: 14px;
			color: #333;
			fleX: none;
			display: flex;
			align-items: center;
			padding-left: 20px;
		}

		.content {
			fleX: auto;
			padding-left: 20px;
			line-height: 32px;
		}
	}
</style>
