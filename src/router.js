import Vue from 'vue';
import Router from 'vue-router';

import Contacts from '@/components/pages/Contacts';
import ContactsDetail from '@/components/pages/ContactsDetail';


Vue.use(Router);
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'contacts',
			component: Contacts,
		},
		{
			path: '/:id',
			name: 'contacts-detail',
			component: ContactsDetail,
			props: (route) => ({ id: route.params.id }),
		},
	],
});
