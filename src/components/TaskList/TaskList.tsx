import React, { FC } from "react";
import Task, { task } from "../Task/Task";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./TaskList.css";

export interface PropsType {
  loading?: boolean;
  tasks?: task[];
  onPinTask?: (id: task["id"]) => void;
  onArchiveTask?: (id: task["id"]) => void;
  onUnpinTask?: (id: task["id"]) => void;
}

const TaskList: FC<PropsType> = ({
  loading,
  onArchiveTask,
  onPinTask,
  onUnpinTask,
  tasks,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
    onUnpinTask,
  };

  if (loading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }
  if (tasks!.length === 0) {
    return (
      <div className="emptyListWrapper">
        <span />
        <CheckCircleIcon className="tickIcon" />
        <div className="emptyListText">You have no tasks</div>
        <div className="emptyListText">Sit back and relax</div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks!.filter((t) => t.state === "TASK_PINNED"),
    ...tasks!.filter((t) => t.state === "TASK_INBOX"),
    ...tasks!.filter((t) => t.state === "TASK_ARCHIVED"),
  ];
  return (
    <div>
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export default TaskList;

TaskList.defaultProps = {
  tasks: [
    { id: "1", title: "Task 1", state: "TASK_INBOX" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6", state: "TASK_INBOX" },
  ],
  loading: false,
  onArchiveTask: () => {
    console.log("task archived");
  },
  onPinTask: () => {
    console.log("task pinned");
  },
  onUnpinTask: () => {
    console.log("task unpinned");
  },
};