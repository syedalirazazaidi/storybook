import React, { useState } from "react";
import { AddInput } from "../components/addInput";

export default {
  title: "Create Task",
  component: AddInput,
};

export const TodoCreateTask = () => (
  <AddInput type="text" placeholder="enter value" />
);
