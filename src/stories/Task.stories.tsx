import React from "react";
import Task, { PropsType } from "../components/Task/Task";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  component: Task,
  title: "Task",
  args: {
    task: { id: "1", title: "New Task", state: "TASK_INBOX" },
    onArchiveTask: () => {
      console.log("task archived");
    },
    onPinTask: () => {
      console.log("task pinned");
    },
    onUnpinTask: () => {
      console.log("task unpinned");
    },
  },
} as Meta;

const Template: Story<PropsType> = (args) => <Task {...args} />;

export const Default = Template.bind({});

export const Pinned = Template.bind({});
Pinned.args = {
  task: { id: "1", title: "Pinned Task", state: "TASK_PINNED" },
};

export const Archived = Template.bind({});
Archived.args = {
  task: { id: "1", title: "Archived Task", state: "TASK_ARCHIVED" },
};