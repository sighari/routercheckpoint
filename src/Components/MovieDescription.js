import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const MovieDescription = ({ data, match }) => {
  const history = useHistory();
  var movieData = [];
  var movieSelected = data.find((m) => m.id === match.params.id);
  console.log(data);
  console.log(match);
  console.log(movieSelected);
  if (movieSelected)
    movieData = () => (
      <div>
        <h1 style={{ color: "white", paddingTop: "0.8cm" }}>
          {" "}
          {movieSelected.name} Description
        </h1>
        <p style={{ fontFamily: "sans-serif" }}>
          <i>{movieSelected.description}</i>
        </p>
        <h2 style={{ color: "white", paddingTop: "0.5cm" }}>
          {" "}
          {movieSelected.name} Trailer
        </h2>
        <iframe
          width="560"
          height="315"
          src={movieSelected.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  else movieData = () => <h2> Sorry. Movie doesnt exist </h2>;
  return (
    <div className="App">
      {movieData()}
      <br />
      <Button
        primary="warning"
        size="lg"
        onClick={() => {
          history.goBack();
        }}
      >
        {" "}
        Go Back{" "}
      </Button>
    </div>
  );
};

export default MovieDescription;
