<template>
	<div class="card-contact">
		<div class="card-contact__header">
			<h4 class="card-contact__title">{{ title }}</h4>
			<!-- Action -->
		</div>

		<div class="card-contact__fields">
			<div class="card-contact__field card-contact-field" v-for="(value, name) in fields" :key="name">
				<p class="card-contact-field__key">{{ name }}</p>
				<p class="card-contact-field__value">{{ value }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		fields: Object,
	}
}
</script>

<style lang="scss">
.card-contact {
	padding: rem(24);
	border: 1px solid rgba($color-dark, 0.3);
	border-radius: rem(4);
}

.card-contact-field {

}
</style>
