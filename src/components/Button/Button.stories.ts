import Button from './index.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Click Me</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
  ariaLabel: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  disabled: false,
  ariaLabel: 'Secondary Button',
};
