import './App.css';
import AnotherComponent from './components/AnotherComponent';
function App() {

  const info = [
    {
      fullname : 'Doe, Jane',
      age : 45,
      hair : 'Black'
    },
    {
      fullname : 'Smith, John',
      age : 88,
      hair : 'Brown'
    },
    {
      fullname : 'Fillmord, Millard',
      age : 50,
      hair : 'Brown'
    },
    {
      fullname : 'Smith, Maria',
      age : 62,
      hair : 'Brown'
    }
  ];


  return (
    <div className="App">
      <AnotherComponent info = {info}/>
    </div>
  );
}

export default App;
