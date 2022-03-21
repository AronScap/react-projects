import React, { useEffect, useState } from 'react'; 
import './App.css';
import PokeApi from './PokeApi';
import Pagination from './components/Pagination';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPokemon, setTotalPokemon] = useState(1);
  const itemsPerPage = 12;
  const numberMaxOfPages = 4;

  useEffect(()=>{     
    const loadAll = async () => {
      let offsetPage = actualPage;
      if(actualPage > 1)offsetPage = (actualPage-1)*itemsPerPage+1;
      let list = await PokeApi.getPokemonsList(itemsPerPage,offsetPage);
      setTotalPokemon(list.count);
      setPokemonList(list);
    }
    loadAll();
  }, [actualPage]);
  
  const [pokemonSelected, setPokemonSelected] = useState([]);
  async function loadPokemonInfo(pokemonID) {
    let _pokemonSelected = await PokeApi.getPokemonInfo(pokemonID);
    setPokemonSelected(_pokemonSelected);
    loadPokemonSpeciesInfo(pokemonID);
  }
  async function loadPokemonSpeciesInfo(pokemonID){
    let _pokemonSelected = await PokeApi.getPokemonSpeciesInfo(pokemonID);
    setColorPokemonSelected(_pokemonSelected.color.name);
  }
  const [colorPokemonSelected, setColorPokemonSelected] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setPokemonSelected([]);
    setShow(false);  
  }
  function handleShow(item){
    loadPokemonInfo(item.name);
    setShow(true);
  }
  
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  function getIsFavorite(pokemon){
    const index = favorites.indexOf(pokemon);
    if(index !== -1 )return true;
    return false;
  }
  function setFavoritePokemon(pokemon){
    const pokemonContainer = document.getElementById("pok-"+pokemon);
    console.log(pokemonContainer);
    if(getIsFavorite(pokemon)){
      favorites.splice(favorites.indexOf(pokemon),1);
      pokemonContainer.classList.remove("fav");
    }
    else{
      favorites.push(pokemon);
      pokemonContainer.classList.add("fav");
    }
    localStorage.setItem('favorites',JSON.stringify(favorites));
    
  }
  return (
    <div className="App">
      <Header />
      {/* <div>{totalPokemon} Pokemon</div> */}
      {pokemonList.results && pokemonList.results.length > 0  && 
        <section className='pokemon--list'>
          {pokemonList.results.map( (item,key) => (
            <div className='pokemon--info' key={key}>
              <h1>{item.name}</h1>
              <a onClick={() => handleShow(item)}>Ver mais</a>
              <div onClick={() => setFavoritePokemon(item.name)} id={`pok-${item.name}`} className={getIsFavorite(item.name)?'star fav':'star'}>✰</div>
            </div>
          ))}
        </section>
      }
      {pokemonSelected &&      
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pokemonSelected.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {pokemonSelected.sprites && <div><img src={pokemonSelected.sprites.front_default} alt="" /></div> }
            <div><b>Base Experience:</b> {pokemonSelected.base_experience}</div>
            {pokemonSelected.types && <div><b>Card Types:</b> {pokemonSelected.types.map(type => {return (<a className='pokemon-type'>{type.type.name}</a>)})}</div> }
            <div><b>Weight:</b> {pokemonSelected.weight}</div>
            {colorPokemonSelected && <div><b>Color:</b> <a style={colorPokemonSelected!=='white'?{color:colorPokemonSelected}:null}>{colorPokemonSelected}</a></div>}
          </Modal.Body>
        </Modal>
      } 
      
      {totalPokemon > itemsPerPage &&
        <Pagination 
          itemsPerPage={itemsPerPage} 
          totalItems={totalPokemon} 
          numberMaxOfPages={numberMaxOfPages} 
          actualPage={actualPage} 
          setActualPage={setActualPage} 
        />
      }
      {/* footer */}
    </div>
  );
}

export default App;
