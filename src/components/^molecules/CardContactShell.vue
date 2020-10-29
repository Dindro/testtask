<template>
	<div class="card-contact-shell">
		<h4 class="card-contact-shell__title" v-if="title">{{ title }}</h4>
		<card-contact v-bind="card"></card-contact>
	</div>
</template>

<script>
import CardContact from '^/CardContact';
export default {
	components: {
		CardContact,
	},

	props: {
		title: String,
		card: Object,
	}
}
</script>

<style lang="scss">
.card-contact-shell {
	&__title {
		margin-bottom: rem(24);
	}
}
</style>
