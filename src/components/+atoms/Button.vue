<template>
	<button :type="type" class="button">
		<span class="button__text" v-if="text">{{ text }}</span>
	</button>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'button',
		},
		text: String,
	}
}
</script>

<style lang="scss">
.button {
	$b: #{&};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 rem(32);
    text-align: center;
    border: none;
    border-radius: 0;
    background: none;
    height: rem(60);
    white-space: nowrap;
    position: relative;
    overflow: hidden;
	cursor: pointer;
	user-select: none;
	outline: none !important;

	@include defaultTransition(color, background-color, opacity);

	@include media-breakpoint-down(sm) {
		height: rem(56);
	}

	&__text {
		@include text-default;
	}

	&,
	&--default {
		background-color: $color-saphire;
		color: $color-dark;


		&:hover:not(:disabled) {
			background-color: $color-dark;
			color: $color-white;
		}
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.65;
	}

}
</style>
