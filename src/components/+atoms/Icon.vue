<template>
	<div
		class="icon"
		:class="[`icon--${sizeMod}`, `icon--${nameShort}`]"
	>
		<svg xmlns="http://www.w3.org/2000/svg">
			<use :xlink:href="path" xmlns:xlink="http://www.w3.org/1999/xlink"/>
		</svg>
	</div>
</template>

<script>
export default {
	props: {
		size: Number,
		name: String,
	},

	computed: {
		path() {
			return require(`@/assets/icons/${this.name}.svg`).default.url;
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
