function TodoItem({ task, onDelete, onToggle }) {
  return (
    <li className="todo-item">
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

      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
