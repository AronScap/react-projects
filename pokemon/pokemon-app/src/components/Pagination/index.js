import React from "react";
import './Pagination.css';

export default function Pagination({itemsPerPage, totalItems, numberMaxOfPages, actualPage}) {
    const pageNumbers = [];
    const numberOfPages = Math.ceil(totalItems / itemsPerPage);
    let offsetI = numberMaxOfPages + actualPage;
    if(actualPage > 1){
        let initial = 1;
        for (let j = 2; j <= actualPage; j++){
            if( actualPage - numberMaxOfPages > initial)initial = j;
        }
        if(numberOfPages > numberMaxOfPages && actualPage > (numberMaxOfPages/2))initial = actualPage-(numberMaxOfPages/2);
        for (let i=initial; i < actualPage; i++) {
            pageNumbers.push(i);
        }
        pageNumbers.push(actualPage);
        for ( let i = actualPage;i < numberMaxOfPages+actualPage && i < numberOfPages && i < actualPage+(numberMaxOfPages/2); i++) { 
            pageNumbers.push(i+1);
        }
    }
    else {
        for (let i = actualPage; i < offsetI+1; i++) {
            pageNumbers.push(i);           
        }
    }
    return (
        <div className='pagination--list'>
            <div className="pagination--link">
                {actualPage > 1 && <div className="pagination--previous">{'<'}</div>}
                {pageNumbers.map(number => (
                    <div className={actualPage===number?"pagination--number actual":"pagination--number"}>{number}</div>
                ))}
                {actualPage < numberOfPages && <div className="pagination--after">{'>'}</div>}
            </div> 
        </div>
    );
}