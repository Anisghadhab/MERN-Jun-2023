import './App.css';
import { useState } from 'react';
function App() {
  const [pokemon, setPokemon] = useState([])  
  const fetchPokemon = () => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => {
        return response.json();

      })
      .then((jsonResponse)=>{
        console.log(jsonResponse); 
        setPokemon(jsonResponse.results)
      })
      .catch((errorObject)=>{
        console.log("GOT ERROR",errorObject)
      })
  }

  return (
    <div className="App">
      <button onClick={fetchPokemon}>POKEMON</button>
      <hr />

      {/* {JSON.stringify(pokemon)} */}
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
            {pokemon.map((onepok)=>{
              return (
                <tr>
                <td key={onepok.name}>{onepok.name}</td>
                </tr>
              )
            })}
      </tbody>
    </div>
  );
}

export default App;
