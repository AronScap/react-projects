import React, { useEffect, useState } from 'react'; 
import TMDB from './TMDB-api/TMDB';
import './App.css';
import MovieRow from './components/MovieRow';
import PinnedMovie from './components/PinnedMovie';
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [PinnedMovieState, setPinnedMovie] = useState(null);
  const [activeHeader, setHeaderActive] = useState(false);
  
  useEffect(()=>{
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.simpleName === 'originals');
      let findMovieRandom = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let movieFinded = originals[0].items.results[findMovieRandom];
      let chosenInfo = await TMDB.getMovieInfo(movieFinded.id, 'tv');
      setPinnedMovie(chosenInfo);
    }
    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10)setHeaderActive(true);
      else setHeaderActive(false);
    }
    window.addEventListener('scroll',scrollListener);
    return () => {window.removeEventListener('scroll',scrollListener);}
  },[]);

  return (
    <div className='page'>
      <Header active={activeHeader} />
      {PinnedMovieState && <PinnedMovie movie={PinnedMovieState} /> }
      {movieList.length > 0 && 
        <section className='movies--list'>
          {movieList.map( (item,key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
      }
      <footer>
        <div>Feito com carinho by Aron</div>
        <div>Direitos de imagem para NETFLIX</div>
        <div>Dados utilizados pelo themoviedb.org</div>
      </footer>
      {movieList.length <= 0 && 
        <div className="loading"><img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Loading" /></div>
      }
    </div>
  );
}

export default App;
