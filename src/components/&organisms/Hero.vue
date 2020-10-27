<template>
	<div class="hero">
		<h1 v-if="title" class="hero__title">{{ title }}</h1>
		<breadcrumbs v-bind="breadcrumbs"></breadcrumbs>
	</div>
</template>

<script>
import Breadcrumbs from '^/Breadcrumbs';

export default {
	components: {
		Breadcrumbs,
	},

	props: {
		title: String,
		breadcrumbs: Object,
	}
}
</script>

<style lang="scss">
.hero {

}
</style>
