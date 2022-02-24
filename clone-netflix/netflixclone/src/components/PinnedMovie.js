import React from "react";
import './PinnedMovie.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

export default ({movie}) => {
    let firstDate = new Date(movie.first_air_date);
    let genres = [];
    for(let index in movie.genres)genres.push( movie.genres[index].name );
    let overview = movie.overview;
    let limitText = 220;
    if(overview.length > limitText)overview = overview.substring(0,limitText)+' ...';

    return (
        <section className="pinned-movie" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
            <div className="screen--vertical">
                <div className="screen--horizontal">
                    <div className="movie--name">{movie.original_name}</div>
                    <div className="movie--infos">
                        <div className="movie--points">{movie.vote_average} pontos</div>
                        <div className="movie--year">{firstDate.getFullYear()}</div>
                        <div className="movie--seasons">{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1?'s':''}</div>
                    </div>
                    <div className="movie--overview">{overview}</div>
                    <div className="movie--buttons">
                        <a href={`/watch/${movie.id}`} className="button--play">
                            <PlayArrowIcon  /> Assistir
                        </a>
                        <a href={`/list/add/${movie.id}`} className="button--add">
                            <AddIcon  /> Minha lista
                        </a>
                    </div>
                    {genres.length > 0 &&
                        <div className="movie--genres">
                            <strong>Gêneros: {genres.join(', ')}</strong>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}