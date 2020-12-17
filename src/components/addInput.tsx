import React from "react";
interface propsSto {
  type: string;
  placeholder: string;
}
export const AddInput = ({ type, placeholder }: propsSto) => {
  const [textfile, settextfile] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textfile) return;
    settextfile("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={placeholder}
          type={type}
          onChange={(e) => settextfile(e.target.value)}
        />
        <br />
      </form>
      {textfile}
    </div>
  );
};
