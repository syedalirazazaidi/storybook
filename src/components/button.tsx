import React from "react";
export interface IProps {
  value: string;
  onClick?: () => void;
  className: string;
  style: Object;
}
export const Button = ({ value, style, className, onClick }: IProps) => {
  console.log(style);
  return (
    <div>
      <button style={style} className={className} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};
