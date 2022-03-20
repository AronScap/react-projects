import React, { useEffect, useState } from 'react'; 
import './App.css';
import PokeApi from './PokeApi';
import Pagination from './components/Pagination';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(()=>{
    const loadAll = async () => {
      let list = await PokeApi.getPokemonsList();
      // console.log(list)
      setPokemonList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="App">
      {/* header */}
      Hello Pokemons
      {pokemonList.results.length > 0 && 
        <section className='pokemon--list'>
          {pokemonList.results.map( (item,key) => (
            <div className='pokemon--info' key={key}>
              <h1>{item.name}</h1>
              <a>Ver mais</a>
            </div>
          ))}
        </section>
      }
      <Pagination />
      {/* footer */}
    </div>
  );
}

export default App;
