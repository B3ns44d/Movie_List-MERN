import React from "react";
function Movie({ name, type, description, imgUrl, rate, time }) {
  /*
      My rating chart will be like this:
      0  ==> I LOVE IT ==> #57e32c
      1  ==> Just WOW ==> #b7dd29
      2  ==> Very cool ==> #ffe234
      3  ==> Wonderful ==> #ffa534
      4  ==> Not so dusty! ==> #ff4545
    */
  console.log(time);
  const setVoteClass = (vote) => {
    if (vote === "I LOVE IT") {
      return "iloveit";
    } else if (vote === "JUST WOW") {
      return "justwow";
    } else if (vote === "Very cool") {
      return "verycool";
    } else if (vote === "Wonderful") {
      return "wonderful";
    } else {
      return "notsodusty";
    }
  };
  console.log(name);
  return (
    <>
    <div className="movie">
      <img src={imgUrl} alt={name} />
      <div className="movie-info">
        <h3>{name}</h3>
        <span className={`tag ${setVoteClass(rate)}`}>{rate}</span>
        {/* <== rate of the movie or series*/}
      </div>
      <div className="movie-overview">
        {/* <== the description of the movies and series*/}
        <h2>{type} Overview:</h2>
        <p>Watch time: {time || "-:-"} hours</p>
        <p>{description}</p>
      </div>
    </div>
    </>
  );
}

export default Movie;
