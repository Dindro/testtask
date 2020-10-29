<template>
	<div>
		<hero v-bind="hero" class="mt-64 mt-md-112"></hero>
	</div>
</template>

<script>
import Hero from '&/Hero';

import { mapMutations, mapState } from 'vuex';

export default {
	components: {
		Hero,
	},

	data: () => ({

	}),

	computed: {
		...mapState({
			contacts: 'contacts',
		}),

		card() {
			return this.contacts.find(contact => contact.id === +this.$route.params.id);
		},

		hero() {
			return {
				title: this.card.title,
				breadcrumbs: {
					items: [
						{
							text: 'Контакты',
							to: { name: 'contacts' },
						},
						{
							text: this.card.title,
							to: {
								name: 'contacts-detail',
								params: { id: this.card.id },
							},
						},
					],
				},
			}
		}
	},

	methods: {
		...mapMutations({
			addContact: 'ADD_CONTACT',
		}),
	},
}
</script>

<style lang="scss">

</style>
