<template>
	<div class="card-contact">
		<div class="card-contact__header">
			<h4 class="card-contact__title">{{ title }}</h4>
			<!-- Action -->
		</div>

		<div class="card-contact__fields">
			<div class="card-contact__field card-contact-field" v-for="key in fields" :key="key">
				<p class="card-contact-field__key">{{ key }}</p>
				<p class="card-contact-field__value">{{ fields[key] }}</p>
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

}

.card-contact-field {

}
</style>
