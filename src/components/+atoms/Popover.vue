<template>
	<span>
		<div
			class="popover"
			ref="poper"
			v-show="showPopover"
			:style="stylePopover"
		>
			<p class="popover__title" v-if="title">{{ text }}</p>
			<slot>{{ content }}</slot>
		</div>
		<slot name="inside"></slot>
	</span>
</template>

<script>
export default {
	props: {
		title: String,
		content: String,
	},

	computed: {

	},

	mounted() {
		const popover = this.$refs.popover;
	},
}
</script>

<style lang="scss">

</style>
