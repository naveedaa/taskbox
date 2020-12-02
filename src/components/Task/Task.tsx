import React, { FC } from "react";
import StarIcon from '@material-ui/icons/Star';
import "./Task.css";

export interface task {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";
}

export interface PropsType {
  task?: task;
  onArchiveTask?: (id: task["id"]) => void;
  onPinTask?: (id: task["id"]) => void;
  onUnpinTask?: (id: task["id"]) => void;
}

const Task: FC<PropsType> = ({
  task,
  onArchiveTask,
  onPinTask,
  onUnpinTask,
}) => {
  function handleChange(task: task): void {
    if (task.state === "TASK_PINNED") {
      onUnpinTask!(task.id);
    } else {
      onPinTask!(task.id);
    }
  }

  return (
    <div className={`list-item ${task!.state}`}>
      <div className={"checkbox_Text"}>
        <label>
          <input
            type="checkbox"
            defaultChecked={task!.state === "TASK_ARCHIVED"}
            disabled={task!.state === "TASK_ARCHIVED"}
            name="checked"
            onClick={() => onArchiveTask!(task!.id)}
          />
        </label>

        <p
          data-testid="text"
          className={task!.state === "TASK_ARCHIVED" ? "archived" : undefined}
        >
          {" "}
          {!!task!.title ? task!.title : "No Title Added"}{" "}
        </p>
      </div>

      <div onClick={(event) => event.stopPropagation()}>
        {task!.state !== "TASK_ARCHIVED" && (
          <StarIcon
            className={
              task!.state !== "TASK_PINNED" ? "starUnpinned" : "starPinned"
            }
            onClick={() => {
              handleChange(task!);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Task;

Task.defaultProps = {
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
};