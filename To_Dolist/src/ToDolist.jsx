import { useState } from "react";
import "./App.css"; // یقینی بنائیں کہ یہ فائل موجود ہے

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Sample Task", completed: false },
    { id: 2, task: "Another Task", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: Date.now(),
        task: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const uppercaseTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task, completed: true }
          : todo
      )
    );
  };

  const uppercaseAllTasks = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
        
      }))
    );
  };

  return (
    <>
      <input
        placeholder="Add Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <button onClick={uppercaseAllTasks}>Uppercase All</button>
      <br />
      <br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.task}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => uppercaseTask(todo.id)}>cut button</button>
          </li>
        ))}
      </ul>
    </>
  );
}
