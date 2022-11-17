import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDeleteClick}) {
  const newTasks = tasks.map((task) => (
    <Task handleDeleteClick={handleDeleteClick}  key={task.text} text={task.text} category ={task.category}/>
  ))

  return (
    <div className="tasks">
      {newTasks}
    </div>
  );
}

export default TaskList;
