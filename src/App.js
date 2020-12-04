import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Loading from "./Loading";
require("dotenv").config(); // ? <== require the dotenv to use .env

const getApiToken = require("./components/urltoken"); // ! <== request urltoken from a .env file
const BLACKAPI = getApiToken.urltoken.BLACKAPI; // ? <== the data url

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    const proxyurl = getApiToken.urltoken.PROXYURL; // ? <== This API enables cross-origin requests to anywhere.
    // proxyurl + BLACKAPI || 
    fetch(proxyurl + BLACKAPI || process.env.PROXYURL + process.env.BLACKAPI) // ! here i did this bc i need to enable the cross-origin request
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
        setLoading(false);
      });
  }, []);


  const handleOnSubmit = (e) => {
    e.preventDefault();

  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <h3 className="b3ns44d">B3ns44d</h3>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {!loading ? (
          movies.length > 0 &&
          movies.map((movie) => <Movie key={movie._id} {...movie} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default App;
