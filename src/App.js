import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App({ movies, setMovies, match }) {
  // show is a state that show the addMovie component
  const [show, setShow] = useState(false);
  //Button Add movie
  const handleShow = () => {
    setShow(!show);
  };
  //Button Close
  const handleClose = () => {
    setShow(false);
  };
  //add movie fct as props to the add movie component with param (...movie)
  function addMovieFunc(newobj) {
    setMovies([...movies, newobj]);
    setShow(false);
  }
  //new state for the input filter
  const [searchMovie, setSearchMovie] = useState("");
  const handleChangeInput = (event) => {
    setSearchMovie(event.target.value);
    console.log(searchMovie);
  };
  //new state for the ratingfilter
  const [searchRatingMovie, setSearchRatingMovie] = useState(1);
  const handleChangeRating = (value) => {
    setSearchRatingMovie(value);
    console.log(searchRatingMovie);
  };
  return (
    <div className="App">
      <Filter
        handleChangeInput={handleChangeInput}
        handleChangeRating={handleChangeRating}
      />
      <br />
      <MovieList
        match={match}
        movies={movies.filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(searchMovie.toLowerCase().trim()) &&
            movie.rating >= searchRatingMovie
        )}
        addMovieFunc={addMovieFunc}
        searchMovie={searchMovie}
        searchRatingMovie={searchRatingMovie}
      />
      <br />
      <Button
        onClick={handleShow}
        style={{ marginBottom: "0.7cm" }}
        variant="info"
      >
        Add Movie
      </Button>
      {show && (
        <AddMovie
          show={show}
          handleClose={handleClose}
          addMovieFunc={addMovieFunc}
        />
      )}
    </div>
  );
}
export default App;
