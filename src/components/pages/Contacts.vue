<template>
	<div>
		<hero v-bind="hero"></hero>
	</div>
</template>

<script>
import Hero from '&/Hero';

export default {
	components: {
		Hero,
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
					}
				]
			}
		}
	}),
}
</script>

<style lang="scss">

</style>
