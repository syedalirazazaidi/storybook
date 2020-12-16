import React, { useState } from "react";
import "./taskBox.css";

import { IPropTask } from "../Types/types";
interface propTodo {
  allvalue: IPropTask[];
}
interface Todo {
  task: IPropTask;
  index?: number;
}
function Task({ task }: Todo) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
    </div>
  );
}
function Todo({ allvalue }: propTodo) {
  const [tasks, setTasks] = useState<IPropTask[]>(allvalue);
  return (
    <div className="todo-container">
      <div className="header">TASKBOX - ITEMS</div>
      <div className="tasks">
        {tasks.map((task: IPropTask, index: number) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
