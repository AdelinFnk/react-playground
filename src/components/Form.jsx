import { useState } from "react";

function Form(props) {

  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name) 
    setName("")
  };   

  //to not alert when the input is empty
  /* function handleSubmit(event) {
    event.preventDefault();

    // Trim the name to remove any leading or trailing whitespace
    const trimmedName = name.trim();

    trimmedName ? props.addTask(trimmedName) : null;
    setName("");
  } */



  return (
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  )
}

export default Form;