import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './Badge';

export default {
  title: 'MIFFY/Badge/Badge',
  component: Badge,
  args: {
    text: 'hoge',
    color: 'info',
  }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const Caution = Template.bind({});
Caution.args = {
  color: 'caution',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

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
