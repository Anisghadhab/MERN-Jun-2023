import './App.css';
import { useState } from 'react';
import Display from './components/display';
import Form from './components/form';
function App() {
  const [box, setBox] = useState([]);
  const addBox = (thatbox) => {
    console.log('hi', thatbox);
    setBox([...box, thatbox])

  };
  return (
    <div className="App">
      <fieldset>
        {JSON.stringify(box)}
        <Form addBox={addBox} />
        <div className="box-container">
          {box.map((lox, index) => (
            <div className="box" key={index}>
              <Display lox={lox} />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default App;
