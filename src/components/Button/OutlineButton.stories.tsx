import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OutlineButton } from './OutlineButton';

export default {
  title: 'MIFFY/Button/OutlineButton',
  component: OutlineButton,
  args: {
    disabled: false,
    size: 'auto',
    type: 'button',
    form: false,
    children: 'Button',
  }
} as ComponentMeta<typeof OutlineButton>;

const Template: ComponentStory<typeof OutlineButton> = (args) => <OutlineButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Newtral = Template.bind({});
Newtral.args = {
  color: 'newtral',
};

export const Light = Template.bind({});
Light.args = {
  color: 'light',
};
