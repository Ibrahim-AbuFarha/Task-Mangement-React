import { useState } from "react";

function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange1 = (e) => setTitle(e.target.value);
  const handleChange2 = (e) => setDescription(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, description);
    setDescription("");
    setTitle("");
  };

  return (
    <>
      <h1>Task Management</h1>
      <div className="task-form">
        <form className="add-task-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="task-input"
            onChange={handleChange1}
            value={title}
            placeholder="Task Title"
            required
          />
          <input
            type="text"
            className="task-input"
            onChange={handleChange2}
            value={description}
            placeholder="Task Description"
            required
          />

          <button className="button">Add Task</button>
        </form>
      </div>
    </>
  );
}

export default Form;
