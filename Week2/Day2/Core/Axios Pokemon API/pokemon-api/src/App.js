import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  useEffect(() => {
    axiosPokemon();
  }, [])
  const [pokemon, setPokemon] = useState([])
  const axiosPokemon = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => {
        return response;

      })
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data.results)
      })
      .catch((errorObject) => {
        console.log("GOT ERROR", errorObject)
      })
  }

  return (
    <div className="App">
      {/* <button onClick={fetchPokemon}>POKEMON</button> */}
      {/* {fetchPokemon()} */}
      <hr />

      {/* {JSON.stringify(pokemon)} */}
      <thead>
        <tr>
          <th>name</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((onepok, idx) => {
          return (
            <tr key={idx}>
              <td>{onepok.name}</td>
            </tr>
          )
        })}
      </tbody>
    </div>
  );
}

export default App;
