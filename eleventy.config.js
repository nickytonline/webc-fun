module.exports = (config) => {
	config.addPlugin(require('@11ty/eleventy-plugin-webc'), {
		components: '_includes/components/*.webc',
	});
};
