<template>
	<ul class="breadcrumbs">
		<li v-for="(item, index) in items" :key="index">
			<router-link :to="item.to" class="breadcrumbs__item">{{ item.text }}</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		items: Array,
	}
}
</script>

<style lang="scss">
.breadcrumbs {
	$b: #{&};

	display: flex;
	padding: 0;
	margin: 0;
	list-style: none;
	margin-top: rem(4);

	@include text-small;

	&__item {
		color: $color-dark;
		opacity: 0.65;
		text-decoration: none !important;
		@include defaultTransition(opacity);

		&:hover {
			opacity: 1;
		}
	}

	li + li {
		&::before {
			color: $color-dark;
			opacity: 0.65;
			content: '—';
			display: inline-block;
			margin: 0 0.3em;
		}
	}
}
</style>
