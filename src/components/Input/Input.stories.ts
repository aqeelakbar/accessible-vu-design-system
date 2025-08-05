import Input from './index.vue';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    modelValue: { control: 'text' },
    required: { control: 'boolean' },
    invalid: { control: 'boolean' },
    type: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" id="story-input" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  modelValue: '',
  required: false,
  invalid: false,
  type: 'text',
};
