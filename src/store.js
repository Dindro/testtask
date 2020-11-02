import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contacts: [],
	},

	mutations: {
		ADD_CONTACT: (state, contact) => {
			contact.id =  Date.now();
			state.contacts.push(contact);
		},

		REMOVE_CONTACT: (state, id) => state.contacts = state.contacts.filter(contact => contact.id !== id),

		ADD_FIELD: (state, { contact, data }) => {
			Vue.set(contact.fields, data.key, data.value);
		},

		REMOVE_FIELD: (state, { contact, key }) => {
			Vue.delete(contact.fields, key);
		},

		RENAME_FIELD: (state, { contact, data }) => {
			if (data.key && data.keyRename) {
				Vue.delete(contact.fields, data.key);
				Vue.set(contact.fields, data.keyRename, data.value);
				return;
			}

			contact.fields[data.key] = data.value;
		},

		SET_FIELDS: (state, { contact, fields}) => contact.fields = fields,
	},
});
