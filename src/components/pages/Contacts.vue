<template>
	<div class="wrapper">
		<hero v-bind="hero" class="mt-64 mt-md-112"></hero>
		<contacts-form v-bind="contactsForm" @add="addContact" class="mt-40 mt-md-64"></contacts-form>
		<card-contact-list v-bind="contacts" @action="({ id }) => removeContact(id)" class= "mt-40 mt-md-80"></card-contact-list>
	</div>
</template>

<script>
import Hero from '&/Hero';
import ContactsForm from '&/ContactsForm';
import CardContactList from '&/CardContactList';

import { mapMutations, mapState } from 'vuex';

export default {
	components: {
		Hero,
		ContactsForm,
		CardContactList,
	},

	data: () => ({
		hero: {
			title: 'Контакты',
			breadcrumbs: {
				items: [
					{
						text: 'Контакты',
						to: { name: 'contacts' },
					},
				],
			},
		},

		contactsForm: {
			form: {
				title: 'Добавить контакт',
				field: {
					name: 'NAME',
					label: 'Имя',
					placeholder: 'Например Петр'
				},
				button: {
					type: 'submit',
					text: 'Добавить',
				},
			},
			preview: {
				title: 'Предпросмотр',
			}
		},
	}),

	computed: {
		...mapState({
			contacts: (state) => {
				// Подговка ссылки
				const items = state.contacts.map((contact) => {
					const link = {
						actionConfirmTitle: 'Вы уверены что хотите удалить?',
						action: {
							icon: { name: '24/trash' },
						},
						to: {
							name: 'contacts-detail',
							params: { id: contact.id },
						},
					};

					return Object.assign({}, contact, link);
				});

				return { items };
			}
		}),
	},

	methods: {
		...mapMutations({
			addContact: 'ADD_CONTACT',
			removeContact: 'REMOVE_CONTACT',
		}),
	},
}
</script>
