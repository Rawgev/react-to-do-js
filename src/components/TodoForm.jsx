import { useState } from "react";

function TodoForm({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask(input);
    setInput("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
