import React, { useEffect, useState } from 'react'; 
import TMDB from './TMDB-api/TMDB';
import './App.css';


function App() {

  const [movieList, setMovieList] = useState([]);

  
  useEffect(()=>{
    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, [])

  return (
    <div className='page'>
      <div className='header'>
        <div className='header-logo'>NETFLIX</div>
        <div className='header-users'>USER ICON</div>
      </div>
      <section className='movies-list'>
        {movieList.map((item,key)=>(
          <div>
            {item.title}
          </div>
        ))}
      </section>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
