import React from "react";

function CreateTask({ addTask }: any) {
  const [value, setValue] = React.useState<any>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
export default CreateTask;
