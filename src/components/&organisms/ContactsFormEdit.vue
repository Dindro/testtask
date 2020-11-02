<template>
	<div class="contacts-form-edit">
		<form class="contacts-form-edit__form">

			<!-- Name Field -->
			<div class="contacts-form-edit__name">
				<field-input :value="fieldsName.value" @input="input($event, fieldsName, 'value')" :label="form.name.name"></field-input>

				<div class="contacts-form-fields-actions">
					<popover-confirm :title="form.fields.cancelPopover" @confirm="cancel(fieldsName)" v-if="fieldsName.cancel">
						<btn morph :icon="{ name: '24/cross' }"></btn>
					</popover-confirm>
					<btn morph :icon="{ name: '24/save' }" @click="save(fieldsName)" v-if="fieldsName.save"></btn>
				</div>
			</div>

			<!-- Fields -->
			<div class="contacts-form-edit__fields contacts-form-fields">
				<p class="contacts-form-fields__title" v-if="form.fields.title">{{ form.fields.title }}</p>
				<div class="contacts-form-fields__field" v-for="(field, i) in fields" :key="i">

					<div class="contacts-form-fields__key">
						<field-input :value="field.key" :label="form.fields.name" @input="input($event, field, 'key')"></field-input>
					</div>

					<div class="contacts-form-fields__value">
						<field-input :value="field.value" :label="form.fields.value" @input="input($event, field, 'value')"></field-input>
					</div>

					<div class="contacts-form-fields-actions">
						<popover-confirm :title="form.fields.cancelPopover" @confirm="cancel(field)" v-if="field.cancel">
							<btn morph :icon="{ name: '24/cross' }"></btn>
						</popover-confirm>
						<btn morph :icon="{ name: '24/save' }" @click="save(field)" v-if="field.save"></btn>
						<popover-confirm :title="form.fields.removePopover" @confirm="remove(field)" v-if="field.remove">
							<btn morph :icon="{ name: '24/trash' }"></btn>
						</popover-confirm>
					</div>
				</div>
			</div>

			<btn v-if="fieldsState" class="contacts-form-edit__state" :text="form.state" @click="loadState"></btn>
		</form>

		<div class="contacts-form-edit__preview">
			<card-contact-shell v-bind="cardPreview"></card-contact-shell>
		</div>
	</div>
</template>

<script>
import CardContactShell from '^/CardContactShell';
import Btn from '+/Button';
import FieldInput from '+/FieldInput';
import PopoverConfirm from '+/PopoverConfirm';

export default {
	components: {
		CardContactShell,
		FieldInput,
		Btn,
		PopoverConfirm,
	},

	props: {
		card: Object,
		form: Object,
		preview: Object,
	},

	data: () => ({
		fieldAdditional: {
			key: '',
			value: '',
			save: false,
			cancel: false,
			remove: false,
		},
		fieldsTemp: [],
		fieldsState: null,
	}),

	computed: {
		cardPreview() {
			return {
				title: this.preview.title,
				card: this.card,
			};
		},

		fields() {
			const fields = this.fieldsTemp.filter(field => field.keyTemp !== 'name');
			fields.push(this.fieldAdditional);
			return fields;
		},

		fieldsName() {
			const field = this.fieldsTemp.find(field => field.keyTemp === 'name');
			return field;
		}
	},

	methods: {
		cancel(field) {
			field.key = field.keyTemp;
			field.value = field.valueTemp;
			field.save = false;
			field.cancel = false;
		},

		add() {
			this.$emit('add', {
				key: this.fieldAdditional.key.trim(),
				value: this.fieldAdditional.value.trim(),
			});

			this.fieldAdditional.key = '';
			this.fieldAdditional.value = '';
			this.fieldAdditional.save = false;
		},

		save(field) {
			this.saveState();

			// Если сохраняем добавляемое поле
			if (field === this.fieldAdditional) {
				this.add();
				return;
			}

			const data = {
				key: field.keyTemp,
				keyRename: field.key,
				value: field.value,
			};

			this.$emit('rename', data);
		},

		remove(field) {
			this.saveState();
			this.$emit('remove', field.keyTemp);
		},

		input(value, field, key) {
			field[key] = value;

			const isChange = field.key.trim() !== field.keyTemp || field.value.trim() !== field.valueTemp;
			const isSaveable = field.key.trim() !== '' && field.value.trim() !== '';

			if (field === this.fieldAdditional) {
				field.save = isChange && isSaveable;
			} else {
				field.save = isChange && isSaveable;
				field.cancel = isChange;
			}
		},

		saveState() {
			this.fieldsState = Object.assign({}, this.card.fields);
		},

		loadState() {
			this.$emit('load', this.fieldsState);
			this.fieldsState = null;
		}
	},

	created() {
		this.$watch('card.fields', () => {
			const fields = [];
			const fieldsEntries = Object.entries(this.card.fields);

			for (const [key, value] of fieldsEntries) {
				const field = {
					key,
					keyTemp: key,
					value,
					valueTemp: value,
					save: false,
					cancel: false,
					remove: true,
				};

				fields.push(field);
			}

			this.fieldsTemp = fields;
		}, { immediate: true, deep: true });
	},
}
</script>

<style lang="scss">
.contacts-form-edit {
	@include media-breakpoint-up(lg) {
		display: flex;
		justify-content: space-between;
		margin: 0 rem(-8);
	}

	&__form {
		@include media-breakpoint-up(lg) {
			width: calc(100% / 2);
			padding: rem(8);
		}

		@include media-breakpoint-down(md) {
			width: 75%;
		}

		@include media-breakpoint-down(sm) {
			width: auto;
		}
	}

	&__preview {
		@include media-breakpoint-up(lg) {
			width: calc(100% / 3);
			padding: rem(8);
		}

		@include media-breakpoint-down(md) {
			margin-top: rem(48);
			width: 50%;
		}

		@include media-breakpoint-down(sm) {
			width: auto;
		}

		.card-contact {
			opacity: 0.65;
		}
	}

	&__state {
		margin-top: rem(24);

		@include media-breakpoint-down(sm) {
			width: 100%;
			margin-top: rem(16);
		}
	}

	&__fields {
		margin-top: rem(32);

		@include media-breakpoint-down(sm) {
			margin-top: rem(16);
		}
	}

	&__name {
		position: relative;
		margin-right: rem(-8);
		padding-right: rem(8);

		@include media-breakpoint-down(sm) {
			margin-right: 0;
			padding-right: 0;

			.contacts-form-fields-actions {
				padding: 0;
			}
		}
	}
}

.contacts-form-fields {
	&__title {
		margin-bottom: rem(16);

		@include media-breakpoint-down(sm) {
			margin-bottom: rem(8);
		}
	}

	&__field {
		display: flex;
		margin: 0 rem(-8);
		position: relative;

		@include media-breakpoint-down(sm) {
			flex-wrap: wrap;
			margin: 0 rem(-4);
		}

		& + & {
			margin-top: rem(16);

			@include media-breakpoint-down(sm) {
				margin-top: rem(8);
			}
		}
	}

	&__key,
	&__value {
		padding: 0 rem(8);
		width: 50%;

		@include media-breakpoint-down(sm) {
			padding: 0 rem(4);
		}
	}
}

.contacts-form-fields-actions {
	position: absolute;
	display: inline-flex;
	left: 100%;
	top: 50%;
	transform: translateY(-50%);

	@include media-breakpoint-down(sm) {
		width: 100%;
		position: static;
		display: flex;
		justify-content: flex-end;
		transform: none;
		padding: 0 rem(8);
		margin-top: rem(4);
	}
}
</style>
