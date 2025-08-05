import Modal from './index.vue';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    open: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: `
    <Modal v-bind="args" @close="args.open = false">
      <p>This is a modal content block.</p>
    </Modal>
  `,
});

export const Open = Template.bind({});
Open.args = {
  open: true,
};

export const Closed = Template.bind({});
Closed.args = {
  open: false,
};
