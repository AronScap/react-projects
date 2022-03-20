import React, { useEffect, useState } from 'react'; 
import './App.css';
import PokeApi from './PokeApi';
import Pagination from './components/Pagination';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [actualPage, setActualPage] = useState(12);
  const [totalPokemon, setTotalPokemon] = useState(1);
  const itemsPerPage = 12;
  const numberMaxOfPages = 4;

  useEffect(()=>{     
    const loadAll = async () => {
      let list = await PokeApi.getPokemonsList(itemsPerPage,actualPage);
      setTotalPokemon(list.count);
      setPokemonList(list);
    }
    loadAll();
  }, [actualPage]);

  

  return (
    <div className="App">
      {/* header */}
      Hello Pokemon
      <div>{totalPokemon} Pokemon</div>
      {pokemonList.results && pokemonList.results.length > 0  && 
        <section className='pokemon--list'>
          {pokemonList.results.map( (item,key) => (
            <div className='pokemon--info' key={key}>
              <h1>{item.name}</h1>
              <a>Ver mais</a>
            </div>
          ))}
        </section>
      }
      
      {totalPokemon > itemsPerPage &&
        <Pagination itemsPerPage={itemsPerPage} totalItems={totalPokemon} numberMaxOfPages={numberMaxOfPages} actualPage={actualPage} />
      }
      {/* footer */}
    </div>
  );
}

export default App;
