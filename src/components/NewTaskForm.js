import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [newItem, setNewItem] = useState("")
  const [category, setNewGroup] = useState("")

  const options = categories.map((arrayItem) => {
    const optionName = arrayItem === "All" ? null : arrayItem ;
    return (
    <option key={arrayItem}> {optionName} </option>
    )
     })
   
function newTask(e) {
  e.preventDefault()
  const item = {
    text: newItem,
    category: category,
  };
  onTaskFormSubmit(item)
}

function input(e) {
  setNewItem(e.target.value)

}

function handleCategoryChange(e) {
  setNewGroup(e.target.value)
}

  return (
    <form onSubmit={newTask}  className="new-task-form">
      <label>
        Details
        <input onChange={input} value ={newItem}   type="text" name="text" />
      </label>
      <label>
        Category
        <select  onChange={handleCategoryChange} value = {category} name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
