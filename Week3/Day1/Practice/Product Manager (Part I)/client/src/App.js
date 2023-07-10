import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import Showone from './components/Showone';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <fieldset>
        <h1>Product Manager</h1>
        <Routes>
          <Route path='/products' element={<Main/>}/>
          <Route path='/products/:id' element={<Showone/>} />
          <Route path='/products/edit/:id' element={<Edit/>} />
        </Routes>
      </fieldset>
    </div>
  );
};

export default App;
