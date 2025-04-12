import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import { nanoid } from "nanoid";


function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks?.map((task) => (
    <Todo 
      name={task.name}
      id={task.id}
      completed={task.completed}
      key={task.id}
    />
  ));

  function addTask(name) {
    //name is like name: name inside the obj
    //nanoid generates an unique string for each id with the prefix todo-
    const newTask = { name, id: `todo-${nanoid()}`, completed: false };
    setTasks([...tasks, newTask]);
    console.log([...tasks, newTask])
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
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
