import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";


function App(props) {
  
  function addTask(name) {
    //name is like name: name inside the obj
    //nanoid generates an unique string for each id with the prefix todo-
    const newTask = { name, id: `todo-${nanoid()}`, completed: false };
    setTasks([...tasks, newTask]);
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


  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.map((task) => (
    <Todo 
    name={task.name}
      id={task.id}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));
  

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remainig`


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
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
