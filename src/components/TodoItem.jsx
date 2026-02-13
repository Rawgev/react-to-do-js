import { useState } from "react";

function TodoItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function handleSave() {
    if (!newText.trim()) return;
    onEdit(newText);
    setIsEditing(false);
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={onToggle}
              style={{ marginRight: "8px" }}
            />

            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                opacity: task.completed ? 0.6 : 1,
              }}
            >
              {task.text}
            </span>
          </div>

          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
