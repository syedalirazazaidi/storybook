import React, { useState } from "react";
import CreateTask from "../components/createtask";

export default {
  title: "Create Task",
  component: CreateTask,
};

// const [value, setValue] = useState<string>("");

// const [taskk, addTaskk] = useState<string>("");
// const handleSubmit = (e: any) => {
//   e.preventDefault();
//   if (!value) return;

//   addTaskk(value);
//   setValue("");
// };

export const TodoCreateTask = () => (
  <CreateTask
    type="text"
    className="input"
    //   value={value}
    //   placeholder="Add a new task"
    //   onChange={(e) => setValue(e.target.value)}
  />
);

// export const TodoCreateTask = () => <CreateTask taskk={taskk} />;
