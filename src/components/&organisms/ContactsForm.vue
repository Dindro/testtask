<template>
	<div class="contacts-form">
		<form action="" class="contacts-form__form">
			<h4 v-if="form.title" class="contacts-form__title">{{ form.title }}</h4>
			<field-input v-model="name" v-if="form.field" v-bind="form.field"></field-input>
			<btn
				class="contacts-form__submit"
				v-bind="form.button"
				:disabled="name === ''"
				@click.native="add"
			></btn>
		</form>
		<div class="contacts-form__preview" v-if="card">
			<card-contact-shell v-bind="Object.assign({}, preview, card)"></card-contact-shell>
		</div>
	</div>
</template>

<script>
import CardContactShell from '^/CardContactShell';
import Btn from '+/Button';
import FieldInput from '+/FieldInput';

export default {
	components: {
		CardContactShell,
		FieldInput,
		Btn,
	},

	props: {
		form: Object,
		preview: Object,
	},

	data: () => ({
		name: '',
	}),

	computed: {
		card() {
			if (!this.name) return null;

			return {
				card: {
					title: this.name,
				},
			};
		},
	},

	methods: {
		add() {
			this.$emit('add', { title: this.name });
			this.name = '';
		}
	}
}
</script>

<style lang="scss">
.contacts-form {
	margin: rem(-8);
	display: flex;
	justify-content: space-between;

	&__form {
		width: calc(100% / 3);

		@include media-breakpoint-down(md) {
			width: 50%;
		}

		@include media-breakpoint-down(sm) {
			width: 100%;
		}
	}

	&__form,
	&__preview {
		padding: rem(8);
	}

	&__preview {
		width: calc(100% / 3);

		@include media-breakpoint-down(md) {
			width: 50%;
		}

		@include media-breakpoint-down(sm) {
			display: none;
		}

		.card-contact {
			opacity: 0.65;
		}
	}

	&__title {
		margin-bottom: rem(24);

		@include media-breakpoint-down(sm) {
			margin-bottom: rem(16);
		}
	}

	&__submit {
		margin-top: rem(24);

		@include media-breakpoint-down(sm) {
			margin-top: rem(16);
		}
	}
}
</style>
