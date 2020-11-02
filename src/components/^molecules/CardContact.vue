<template>
	<div
		class="card-contact"
		:class="[ to && 'has-link' ]"
	>
		<div class="card-contact__header">
			<h4 class="card-contact__title">{{ fields.name }}</h4>

			<div v-if="action" class="card-contact__action">
				<popover-confirm :title="actionConfirmTitle" @confirm="handleAction">
					<btn morph :icon="action.icon"></btn>
				</popover-confirm>
			</div>
		</div>

		<div class="card-contact__fields" v-if="fieldsWithouteName && Object.keys(fieldsWithouteName).length">
			<div class="card-contact__field card-contact-field" v-for="(value, key) in fieldsWithouteName" :key="key">
				<p class="card-contact-field__key">{{ key }}</p>
				<p class="card-contact-field__value">{{ value }}</p>
			</div>
		</div>

		<router-link class="card-contact__link" v-if="to" :to="to"></router-link>
	</div>
</template>

<script>
import Btn from '+/Button';
import PopoverConfirm from '+/PopoverConfirm';

export default {
	inheritAttrs: false,

	components: {
		Btn,
		PopoverConfirm,
	},

	props: {
		id: Number,
		fields: Object,
		to: Object,
		action: Object,
		actionConfirmTitle: String,
	},

	computed: {
		fieldsWithouteName() {
			const fields = Object.assign({}, this.fields);
			delete fields.name;
			return fields;
		}
	},

	methods: {
		handleAction() {
			this.$emit('action', this.$props);
		},
	},
}
</script>

<style lang="scss">
.card-contact {
	$b: #{&};

	display: block;
	padding: rem(24);
	border: 1px solid rgba($color-dark, 0.3);
	border-radius: rem(4);
	position: relative;

	&__fields {
		margin-top: rem(16);
	}

	&__title {
		padding-right: rem(40);
	}

	&__action {
		position: absolute;
		top: rem(16);
		right: rem(16);
		opacity: 0;
		z-index: 1;

		@include defaultTransition(opacity);
	}

	&__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&:hover {
		#{$b}__action {
			opacity: 1;
		}
	}

	&.has-link {
		@include defaultTransition(box-shadow);

		&:hover {
			box-shadow: 0px rem(4) rem(8) rgba($color-dark, 0.08);
		}
	}
}

.card-contact-field {
	display: flex;
	word-break: break-word;

	& + & {
		margin-top: rem(8);
	}

	&__key {
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
