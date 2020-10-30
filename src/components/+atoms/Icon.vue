<template>
	<div class="icon" :class="[`icon--${sizeMod}`, `icon--${nameShort}`]" v-html="src"></div>
</template>

<script>
export default {
	props: {
		size: Number,
		name: String,
	},

	computed: {
		src() {
			return require(`@/assets/icons/${this.name}.svg`);
		},

		nameShort() {
			return this.getName(this.name);
		},

		sizeMod() {
			return this.size || this.getSize(this.name);
		}
	},

	methods: {
		getSize(name) {
			const words = name.split('/');
			if (words.length <= 1) return undefined;

			const size = parseInt(words[0]);
			if (!size || isNaN(size)) return undefined;

			return size;
		},

		getName(name) {
			const words = name.split('/');
			if (words.length <= 1) return name;

			return words[1];
		}
	},
}
</script>

<style lang="scss">
.icon {
	display: inline-block;

	&,
	&--default,
	&--24 {
		width: rem(24);
		height: rem(24);

		@include media-breakpoint-down(sm) {
			width: rem(20);
			height: rem(20);
		}
	}

	svg {
		vertical-align: initial;
		width: 100%;
		height: 100%;
	}
}
</style>
