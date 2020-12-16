import React from "react";
import { IProps } from "./button";
export const Text = ({ value, style, className }: IProps) => (
  <p style={style} className={className}>
    {value}
  </p>
);
