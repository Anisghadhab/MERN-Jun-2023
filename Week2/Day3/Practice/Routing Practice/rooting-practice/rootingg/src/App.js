import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { useParams } from "react-router";
function App() {
  const Welcome = (props) => {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    )
  };
  const Number = (props) => {
    const { value } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();

    return (
      <div>
        <h1 style={{backgroundColor : color1, color : color2}}>The Number is: {value} </h1>
      </div>
    );
  };
  const Word = (props) => {
    const {value} = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();
    return(
      <div>
        <h1 style={{backgroundColor : color1, color : color2}}>The Word is: {value} </h1>
      </div>
    ) 
  };
  const NumOrWord = (props) =>{
    const {value} = useParams();
    const isWord = isNaN(value)
    return(
      <div>
        { isWord ? <Word/> : <Number/> }
      </div>
    )
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/:value' element={<NumOrWord />} />
        <Route path='/:value/:color1' element={<NumOrWord />} />
        <Route path='/:value/:color1/:color2' element={<NumOrWord />} />
      </Routes>
    </div>
  );
};

export default App;
