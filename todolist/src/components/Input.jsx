import React from "react";
import { FaPlus } from "react-icons/fa";

const Input = ({ taskInput, setTaskInput , addNewTask }) => {
  return (
    <div className="input-data">
      <input
        type="text"
        placeholder="What do you need to do ?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addNewTask}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Input;
