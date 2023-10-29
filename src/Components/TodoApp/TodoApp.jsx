import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Todo() {
  const [todos, setTodos] = useState(['React', 'interview']);

  function addTask(text) {
    if (!todos.includes(text) && text.length > 0) {
      setTodos([...todos, text]);
    }
  }

  function deleteTodo(i) {
    setTodos(todos.filter((j) => j !== i));
  }

  let updatedInput;
  return (
    <div className="container mt-4">
      <div className="mb-3"> 
        <input
          className="form-control"
          ref={(input) => (updatedInput = input)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
            }
          }}
          placeholder="Enter task"
        />
      </div>

      <div className="d-flex justify-content-center"> 
        <button
          className="btn btn-success"
          onClick={() => addTask(updatedInput.value)}
        >
          Add Task
        </button>
      </div>

      <ul className="list-group">
        {todos.map((i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {i}
            <button
              className="btn btn-warning btn-sm"
              onClick={() => deleteTodo(i)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
