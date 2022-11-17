import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
 
function App() {

const [task, setTask] = useState(TASKS)
const [category, setCategory] = useState("All")


 function handleDeleteClick(deletedTask) {
  setTask(task.filter((t) => t.text !== deletedTask ))

}
function onTaskFormSubmit(item) {
  setTask([...task, item ])
}

const displayTasks = task.filter((task1) => category === "All" || task1.category == category )
  
return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  setter={setCategory} category={category} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList handleDeleteClick={handleDeleteClick} tasks={displayTasks}/>
    </div>
  );
}

export default App;
