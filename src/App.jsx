import "./App.css";



function App(props) {
  
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <p>{props.greeting}</p>
        <button type="button" className="primary">Click me!</button>
      </header>
    </>
  );
}

export default App;
