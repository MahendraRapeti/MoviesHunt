import { useState,useEffect } from "react";
import './style.css'
import Moviecard from "./moviecard";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App =()=>{
    const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

      return(
        <div className="app">
            <h1>Moviesworld</h1>
            <div className="searcharea">
                <input type="text"
                 onChange={(e) => {
                     setSearchTerm(e.target.value)
                    }}
                 onFocus={(e) =>{e.target.value=''}}
                 placeholder="Search for movies"
                 />
                <button className="searchicon"
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></button>
            </div>
            
                        {movies?.length > 0 ? (
                    <div className="movies">
                    {movies.map((movie) => (
                        <Moviecard movie={movie} />
                    ))}
                    </div>
                    ) : (
                        <div className="empty">
                        <h2>No movies found</h2>
                        </div>
                    )}
        </div>
      );
}

export default App;