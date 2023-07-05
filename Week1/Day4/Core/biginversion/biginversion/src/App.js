import './App.css';
import Subcomponent from './components/subcomponent';
import Form from './components/Form';
function App() {

  const person = {
    name: "John",
    lastName: "Doe",
    age: 30,
    city: "New York"
  };
  return (
    <div className="App">
      <Subcomponent person = {person} price = {999}/>
      <Form />
    </div>
  );
}

export default App;
