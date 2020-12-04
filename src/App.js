import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Loading from "./Loading";
require("dotenv").config(); // ? <== require the dotenv to use .env

// const getApiToken = require("./components/urltoken"); // ! <== request urltoken from a .env file
// const BLACKAPI = getApiToken.urltoken.BLACKAPI; // ? <== the data url
console.log(
  "%cStop!",
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);
console.log(process.env.REACT_APP_ASKYOU);
// %cBlue!", "color: blue;"
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    // const proxyurl = getApiToken.urltoken.PROXYURL; // ? <== This API enables cross-origin requests to anywhere.
    // proxyurl + BLACKAPI ||
    fetch(process.env.REACT_APP_PROXYURL + process.env.REACT_APP_BLACKAPI) // ! here i did this bc i need to enable the cross-origin request
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
        setLoading(false);
      });
  }, []);

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  // };
  // const handleOnChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  return (
    <>
      <header>
        <h3 className="b3ns44d">B3ns44d</h3>
        {/* <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form> */}
        {/* alert filed */}
        <div className="container">
          <div className="interior">
            <a className="btn" rel="noreferrer" href="#open-modal">
              👋 Hello Open me
            </a>
          </div>
        </div>
        <div id="open-modal" className="modal-window">
          <div className="text">
            <a href="/#" title="Close" className="modal-close">
              Close
            </a>
            <h1>Hello I'm B3ns44d</h1>
            <div>
            and this website offers all the movies and series that I have watched in my entire life
            </div>
            <div>
              <small>Check out</small>
            </div>
            <a className="coffee"
              target="_blank"
              rel="noreferrer"
              href="https://ko-fi.com/b3ns44d"
            >
              👉 Buy me a Coffee ☕
            </a>
          </div>
        </div>
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
