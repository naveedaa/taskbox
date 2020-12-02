import React from 'react';
import NewTask, { PropsType } from '../components/NewTask/NewTask';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  component: NewTask,
  title: "New Task",
} as Meta;

const Template: Story<PropsType> = (args) => <NewTask {...args} />;

export const Default = Template.bind({});