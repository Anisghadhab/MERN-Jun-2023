import './App.css';
import { useState } from "react";

function App() {
    const newTask = { completed: false, text: "" };
    const [task, setTask] = useState(newTask);
    const [todoList, setTodoList] = useState([]);

    const handleSub = (e) => {
        e.preventDefault();
        if (task.text === "") {
            return;
        }
        setTodoList([...todoList, task]);
        setTask(newTask);
    };

    const handleDel = (index) => {
        const todoListUpdated = todoList.filter((_, i) => i !== index);
        setTodoList(todoListUpdated);
    };

    const handleTog = (index) => {
        const updatedList = [...todoList];
        updatedList[index].completed = !updatedList[index].completed;
        setTodoList(updatedList);
    };

    return (
        <div className="App">
            <div>
                <form onSubmit={handleSub}>
                    <input
                        onChange={(e) => setTask({ ...task, text: e.target.value })}
                        type="text"
                        value={task.text}
                    />{" "}
                    <br />
                    <button>Add</button>
                </form>
            </div>
            {todoList.map((todo, index) => (
                <div key={index}>
                    <p>{todo.text}</p>
                    <input
                        onChange={() => handleTog(index)}
                        type="checkbox"
                        checked={todo.completed}
                    />
                    <button onClick={() => handleDel(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default App;
