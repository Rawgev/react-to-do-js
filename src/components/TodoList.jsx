import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTask, toggleComplete }) {
  if (tasks.length === 0) {
    return <p className="empty-text">No tasks yet. Add one above 👆</p>;
  }

  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onToggle={() => toggleComplete(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
