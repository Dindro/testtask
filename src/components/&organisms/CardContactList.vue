<template>
	<div class="card-contact-list">
		<div class="card-contact-list__items">
			<div class="card-contact-list__item" v-for="item in items" :key="item.id">
				<card-contact v-bind="item"></card-contact>
			</div>
		</div>
	</div>
</template>

<script>
import CardContact from '^/CardContact';

export default {
	components: {
		CardContact,
	},

	props: {
		items: Array,
	}
}
</script>

<style lang="scss">
.card-contact-list {
	&__items {
		display: flex;
		flex-wrap: wrap;
		margin: rem(-8);
	}

	&__item {
		padding: rem(8);
		width: calc(100% / 3);

		@include media-breakpoint-down(md) {
			width: 50%;
		}

		@include media-breakpoint-down(sm) {
			width: 100%;
		}
	}
}
</style>
