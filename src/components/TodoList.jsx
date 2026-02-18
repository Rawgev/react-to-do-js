import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { createPortal } from "react-dom";
import TodoItem from "./TodoItem";


function TodoList({ tasks, deleteTask, toggleComplete, editTask, setTasks }) {
  function handleDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setTasks(items);
  }

if (tasks.length === 0) {
  return (
    <div className="empty-state">
      <p>✨ Nothing here yet</p>
      <span>Add your first task above to get started</span>
    </div>
  );
}



  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todoList">
        {(provided) => (
          <ul
            className="todo-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={index} draggableId={index.toString()} index={index}>
                {(provided, snapshot) => {
                  const child = (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      <TodoItem
                        task={task}
                        onDelete={() => deleteTask(index)}
                        onToggle={() => toggleComplete(index)}
                        onEdit={(newText) => editTask(index, newText)}
                      />

                    </li>
                  );

                  // ⭐ portal only while dragging
                  if (snapshot.isDragging) {
                    return createPortal(child, document.body);
                  }

                  return child;
                }}
              </Draggable>
            ))}


            {/* 🔥 MUST stay INSIDE ul */}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

    </DragDropContext>
  );
}

export default TodoList;
