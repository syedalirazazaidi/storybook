import React, { FunctionComponent, useState } from "react";
import "./taskBox.css";

import { IPropTask } from "../Types/types";
import CreateTask from "./createtask";
interface propTodo {
  allvalue: IPropTask[];
}
interface Todotype {
  task: IPropTask;
  index?: number;
}
function Task({ task }: Todotype) {
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
  const addTask = (title: string) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <div className="header">ADD- TASK</div>
      <div className="tasks">
        {tasks.map((task: IPropTask, index: number) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
