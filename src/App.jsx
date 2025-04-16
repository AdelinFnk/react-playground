import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  
  function addTask(name) {
    //name is like name: name inside the obj
    //nanoid generates an unique string for each id with the prefix todo-
    const newTask = { name, id: `todo-${nanoid()}`, completed: false };
    setTasks([...tasks, newTask]);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      //if this task has the same ID as the edited task
      if(id === task.id) {
        //copy the task and uuupdate its name
        return {...task, name: newName };
      }
      //return the original task if its not the edited task
      return task;
    })
    setTasks(editedTaskList);

  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      //if this has the same ID as the edited task
      if (id === task.id) {
        //use object spread to make a new object
        //whose COMPLETED props has been inverted
        return {...task, completed: !task.completed };
      }
      return task;
    })
    setTasks(updatedTasks);
  }


  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState(props.tasks);
  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      name={task.name}
      id={task.id}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));


  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  
  

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`
  


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
