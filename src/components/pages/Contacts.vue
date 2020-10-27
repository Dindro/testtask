<template>
	<div>
		<hero v-bind="hero"></hero>
		<card-contact-list v-bind="contacts"></card-contact-list>
	</div>
</template>

<script>
import Hero from '&/Hero';
import CardContactList from '&/CardContactList';

export default {
	components: {
		Hero,
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
					{
						text: 'Сергей Семенов',
						to: { name: 'contacts' },
					},
				],
			},
		},

		contacts: {
			items: [
				{
					id: 0,
					title: 'Сергей Семенов',
					fields: {
						email: 'email@gmail.com'
					}
				}
			]
		}
	}),
}
</script>

<style lang="scss">

</style>
