import './App.css';
import { useState } from "react";
function App() {
  const newtask = {completed : false, text : ""}
  const [task, setTask] = useState(newtask)
  const [todoList, setTodoList] = useState([])
  const handleSub = (e) => {
    e.preventDefault();
    if (task.text === ""){
      return;
    }
    setTodoList([...todoList, task])
    setTask(newtask);

  }
  const handleDel = (index) => {
    console.log("hi")
    const todoListUpdated = todoList.filter((todo, i) => {
      return (
        i !== index
      );
    })  
    console.log("hi", todoListUpdated)
    setTodoList(todoListUpdated);
  };
  const handleTog = (index)=>{
    
      const updatedList = [...todoList];
      updatedList[index].completed = ! updatedList[index].completed;
      setTodoList(updatedList)
    }
  

  return (
    <div className="App">
      <div>
        <form onSubmit={(e) => { handleSub(e) }}>
          <input onChange={(e) => { setTask({...task, text : e.target.value}) }} type="text" value={task.text} /> <br />
          <button>Add</button>
        </form>
      </div>
      {todoList.map((todo, index) => {
        return (
          <div key={index}>
            <p>{todo.text}</p>
            <input 
            onChange={( )=>{handleTog(index)}}
            type="checkbox" 
            value={task.completed}
            

            />
            <button
              onClick={() => {
                handleDel(index)
              }}>
              Delete
            </button>

          </div>
        )
      })}

    </div>
  )
}

export default App;
