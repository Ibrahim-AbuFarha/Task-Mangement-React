// TaskList.js
import { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskList({ tasks, onDelete, onEdit }) {
  const [isShow, setIsShow] = useState(false);
  const onEditSubmit = () => {
    setIsShow(false);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-item" key={task.id}>
          <div className="task-title">{task.title}</div>
          <div className="task-description">{task.description}</div>
          <div className="task-actions">
            <button onClick={() => onDelete(task.id)}>Remove</button>
            <button  className="edit" onClick={() => setIsShow(task.id)}>Edit</button>
            {isShow === task.id && (
              <TaskEdit
                onEdit={onEdit}
                onEditSubmit={onEditSubmit}
                task={task}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
