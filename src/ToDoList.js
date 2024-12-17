import React, { useState } from "react"; // Importing necessary React hooks

const ToDoList = () => {
  // State hook to manage the input value for a new to-do item
  const [todo, setTodo] = useState("");
  // State hook to manage the list of to-do items
  const [list, setList] = useState([]);

  // Function to add a new task to the list
  const addNewTask = () => {
    // Check if the 'todo' input is not empty before adding it to the list
    if (todo) {
      // Add the new task to the list and reset the input field
      setList([...list, todo]);  // Spread the current list and add the new task
      setTodo(""); // Reset the input field to an empty string
    }
  };

  // Function to delete a task from the list by its index
  const deleteTask = (indx) => {
    // Use the filter method to return a new array excluding the task at the given index
    setList(list.filter((el, ind) => ind !== indx));
  };

  // Placeholder function for editing a task (currently does nothing)
  const editTask = () => {
    // This function could be implemented for editing tasks in the future
  };

  return (
    <div>
      {/* Display the title of the to-do list */}
      <h1>To Do List</h1>

      {/* Input field to enter a new task */}
      <input
        type={"text"}  // Type of the input field is text
        value={todo}  // Bind the input value to the 'todo' state variable
        onChange={(e) => setTodo(e.target.value)}  // Update 'todo' state as user types
      />

      {/* Button to save the new task */}
      <button onClick={addNewTask}>Save</button>

      {/* Display the list of tasks */}
      {list.map((el, ind) => {
        return (
          <li key={ind}>
            {/* Display the task */}
            {el}
            
            {/* Button to delete a specific task */}
            <button onClick={() => deleteTask(ind)}>Delete</button>

            {/* Button to edit a specific task (currently doesn't do anything) */}
            <button onClick={() => editTask(ind)}>Edit</button>
          </li>
        );
      })}
    </div>
  );
};

export default ToDoList;
