import React from "react";
import Todo from "../components/taskbox";
import { IPropTask } from "../Types/types";
const alltask: IPropTask[] = [
  {
    title: "Grab some Pizza",
    completed: true,
  },
  {
    title: "Do your workout",
    completed: true,
  },
  {
    title: "Hangout with friends",
    completed: false,
  },
];
export default {
  title: "Todo",
  component: Todo,
};

export const TodoTask = () => <Todo allvalue={alltask} />;


// import React, { useState } from "react";
// import CreateTask from "../components/createtask";

// export default {
//   title: "Create Task",
//   component: CreateTask,
// };

// export const TodoCreateTask = () => (
//   <CreateTask type="text" className="input" />
// );


// createtask.stories.tsx