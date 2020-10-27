const path = require('path');

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src/'),
				'+': path.resolve(__dirname, 'src/components/+atoms/'),
				'^': path.resolve(__dirname, 'src/components/^molecules/'),
				'&': path.resolve(__dirname, 'src/components/&organisms/'),
			}
		}
	},
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import '@/assets/scss/vars/index.scss'; @import '@/assets/scss/mixins/index.scss';`,
			},
		},
	},
};
