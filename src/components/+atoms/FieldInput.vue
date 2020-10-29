<template>
	<div class="input-shell">
		<input
			class="input"
			:value="value"
			:type="type"
			:readonly="readonly"
			:disabled="disabled"
			:name="name"
			:id="id"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
		>
		<label class="input-shell-label" :class="[ isExist && 'input-shell-label--exist' ]">{{ label }}</label>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,

	props: {
		value: {
			type: String,
			value: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		label: String,
		placeholder: String,
		disabled: Boolean,
		readonly: Boolean,
		name: String,
		id: String,
	},

	computed: {
		isExist() {
			return this.value !== '';
		},
	},
}
</script>

<style lang="scss">
.input {
	border: 1px solid rgba($color-dark, 0.3);
	height: rem(60);
	width: 100%;
	outline: none !important;
	padding: rem(20) rem(24) 0 rem(24);
	border-radius: 0;

	@include defaultTransition(box-shadow, border-color);
	@include text-default;

	@include media-breakpoint-down(sm) {
		height: rem(56);
	}

	&:hover,
	&:focus {
		box-shadow: 0px rem(8) rem(20) 0px rgba($color-dark, 0.1);
	}

	&::placeholder {
		color: $color-dark;
		opacity: 0.3;
		@include defaultTransition(opacity);
	}

	&:not(:focus)::placeholder {
		opacity: 0;
	}
}

.input-shell {
	position: relative;
}

.input-shell-label {
	@include text-default;
	position: absolute;
	top: 50%;
	left: rem(24);
	transform: translateY(-50%);
	opacity: 0.65;
	white-space: nowrap;
	transform-origin: left center;
	pointer-events: none;

	@include defaultTransition(transform, color);

	@at-root input:focus + &,
	&--exist {
		transform: translateY(-100%) scale(0.85);
	}
}
</style>

