import React from 'react';
const moviecard=({ movie: { imdbID, Year, Poster, Title, Type } })=> {
    return (
        <div className='moviecard' key={imdbID}>
            <h1>{Year}</h1>
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} className='image' />
            <h3>{Type}</h3>
            <h3>{Title}</h3>
        </div>
    );
}

export default moviecard;