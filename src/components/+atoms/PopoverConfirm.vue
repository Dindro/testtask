<template>
	<span class="popover-confirm">
		<slot></slot>
	</span>
</template>

<script>
export default {
	props: {
		title: String,
	},

	mounted() {
		const element = this.$slots.default[0].elm;

		element.addEventListener('click', (e) => {
			e.preventDefault();
			const confirm = window.confirm(this.title);
			confirm && this.$emit('confirm');
		});
	},
}
</script>
