// TaskEdit.js
import { useState } from "react";

function TaskEdit({ onEdit, task, onEditSubmit }) {
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);
  const handleNewTitle = (e) => setNewTitle(e.target.value);
  const handleNewDescription = (e) => setNewDescription(e.target.value);
  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(newTitle, newDescription, task.id);
    onEditSubmit();
  };

  return (
    <>
      <form className="task-edit-form" onSubmit={handleEditSubmit}>
        <input
          type="text"
          className="task-input"
          onChange={handleNewTitle}
          value={newTitle}
        />
        <input
          type="text"
          className="task-input"
          onChange={handleNewDescription}
          value={newDescription}
        />
        <button className="button">Submit Edit</button>
      </form>
    </>
  );
}

export default TaskEdit;
