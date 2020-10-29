import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contacts: [],
	},

	getters: {

	},

	mutations: {
		ADD_CONTACT: (state, contact) => {
			contact.id =  Date.now();
			state.contacts.push(contact);
		},
	},
});
