<template>
	<div class="wrapper">
		<hero v-bind="hero" class="mt-64 mt-md-112"></hero>
		<contacts-form-edit
			class="mt-64"
			v-bind="form"
			:card="card"
			@add="addField"
			@remove="removeField"
			@rename="renameField"
			@load="loadFields"
		></contacts-form-edit>
	</div>
</template>

<script>
import Hero from '&/Hero';
import ContactsFormEdit from '&/ContactsFormEdit';

import { mapState } from 'vuex';

export default {
	components: {
		Hero,
		ContactsFormEdit,
	},

	computed: {
		...mapState({
			contacts: 'contacts',
		}),

		card() {
			return this.contacts.find(contact => contact.id === +this.$route.params.id);
		},

		hero() {
			const { name } = this.card.fields;

			return {
				title: name,
				breadcrumbs: {
					items: [
						{
							text: 'Контакты',
							to: { name: 'contacts' },
						},
						{
							text: name,
							to: {
								name: 'contacts-detail',
								params: { id: this.card.id },
							},
						},
					],
				},
			};
		},

		form() {
			return {
				form: {
					name: {
						name: 'Имя',
					},
					fields: {
						title: 'Поля',
						name: 'Название поля',
						value: 'Значение поля',
						cancelPopover: 'Отменить изменения?',
						removePopover: 'Уверены, что хотите удалить поле?',
					},
					state: 'Отменить последнее изменение',
				},
				preview: {
					title: 'Предпрсмотр',
				},
			};
		},
	},

	methods: {
		addField(data) {
			this.$store.commit('ADD_FIELD', { contact: this.card, data });
		},

		removeField(key) {
			this.$store.commit('REMOVE_FIELD', { contact: this.card, key });
		},

		renameField(data) {
			this.$store.commit('RENAME_FIELD', { contact: this.card, data });
		},

		loadFields(fields) {
			this.$store.commit('SET_FIELDS', { contact: this.card, fields });
		}
	},
}
</script>
