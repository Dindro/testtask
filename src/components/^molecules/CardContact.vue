<template>
	<component :is="componentName" v-bind="componentData" class="card-contact" :class="[ componentName === linkName && 'card-contact--link' ]">
		<div class="card-contact__header">
			<h4 class="card-contact__title">{{ title }}</h4>
			<!-- Action -->
			<btn v-if="action" morph :icon="action.icon"></btn>
			<icn name="24/trash"></icn>
		</div>

		<div class="card-contact__fields" v-if="fields">
			<div class="card-contact__field card-contact-field" v-for="(value, name) in fields" :key="name">
				<p class="card-contact-field__name">{{ name }}</p>
				<p class="card-contact-field__value">{{ value }}</p>
			</div>
		</div>
	</component>
</template>

<script>
import Btn from '+/Button';
import Icn from '+/Icon';

export default {
	inheritAttrs: false,

	components: {
		Btn,
		Icn,
	},

	props: {
		action: Object,
		title: String,
		fields: Object,
		to: Object,
	},

	data: () => ({
		linkName: 'router-link',
	}),

	computed: {
		componentName() {
			if (!this.to) return 'div';

			return this.linkName;
		},

		componentData() {
			if (this.componentName === this.linkName) {
				return {
					to: this.to,
				};
			}

			return false;
		}
	},
}
</script>

<style lang="scss">
.card-contact {
	display: block;
	padding: rem(24);
	border: 1px solid rgba($color-dark, 0.3);
	border-radius: rem(4);

	&__fields {
		margin-top: rem(16);
	}

	&--link {
		@include defaultTransition(box-shadow);

		&:hover {
			box-shadow: 0px rem(4) rem(8) rgba($color-dark, 0.08);
		}
	}
}

.card-contact-field {
	display: flex;

	& + & {
		margin-top: rem(8);
	}

	&__name {
		padding-right: rem(8);
		width: 40%;
		opacity: 0.3;
	}

	&__value {
		width: 60%;
		opacity: 0.65;
	}
}
</style>
