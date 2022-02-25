import React, { useState } from "react";
import './MovieRow.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default ({title,items}) => {
    const [scrollX,setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0)x = 0;
        setScrollX(x);        
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x)x = (window.innerWidth - listW) - 60;
        setScrollX(x);     
    }
    
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <ChevronLeftIcon />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <ChevronRightIcon />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft:scrollX, width: items.results.length * 150 }}>
                    {items.results.length > 0 && items.results.map( (item,key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}