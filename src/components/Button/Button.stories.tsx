import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'MIFFY/Button/Button',
  component: Button,
  args: {
    disabled: false,
    size: 'auto',
    type: 'button',
    form: false,
    children: 'Button',
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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
