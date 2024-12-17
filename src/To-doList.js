import React, { useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
    if (todo) {
      setTasks([...tasks, todo]);
      setTodo("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex !== index));
  };

  return (
    <div>
      <h1>Add item in todo</h1>

      <input
        type={"text"}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
     
      <button onClick={addNewTask}>Save</button>
      <br />

      <ul>
        {tasks.map((task, ind) => {
          return (
            <li key={ind}>
              {task} 
              <button onClick={() => deleteTask(ind)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
