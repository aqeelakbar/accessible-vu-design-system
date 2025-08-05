module.exports = {
  stories: ['../src/components/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
};
