import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
require("dotenv").config(); // ? <== require the dotenv to use .env
const getApiToken = require("./components/urltoken"); // ! <== request urltoken from a .env file

const BLACKAPI = getApiToken.urltoken.BLACKAPI; // ? <== the data url 

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const proxyurl = getApiToken.urltoken.PROXYURL; // ? <== This API enables cross-origin requests to anywhere.
    fetch(proxyurl + BLACKAPI) // ! here i did this bc i need to enable the cross-origin request
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // ** print the response data json
        setMovies(data);
      });
  }, []);
  return (
    <div className="app">
      {movies.length > 0 && movies.map((movie) => <Movie />)}
    </div>
  );
}

export default App;
