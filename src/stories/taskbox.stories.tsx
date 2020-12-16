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
