import React from "react";
import { Button } from "../components/button";
export default {
  title: "Button",
  component: Button,
};

export const BtonLg = () => (
  <Button
    value={"Button Large"}
    className={"cls"}
    style={{ width: "50px", background: "blue" }}
    onClick={() => alert("CLick")}
  />
);
