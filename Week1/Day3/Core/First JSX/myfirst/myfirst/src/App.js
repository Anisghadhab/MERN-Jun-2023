import './App.css';
import AnotherComponent from "./components/component"



function App() {
  const todolist = [
        'Learn React',
        'Climb Mt Everest',
        'Run a marathon',
        'Feed the dogs',
    ]
  const dojo = "Hello Dojo!"
  
  
  
  return (
    <div className="App">
      
      <AnotherComponent todolist = {todolist} dojo = {dojo}/>
    </div>
  );
}

export default App;
