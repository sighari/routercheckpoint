import React, { useState } from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import Home from "./Components/Home";
import MovieDescription from "./Components/MovieDescription";
import { v4 as uuidv4 } from "uuid";

const RouteCompononet = () => {
  // movies state an array of objects
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Mewtwo contre-attaque",
      description:
        "L'aventure fait place à l'action avec l'apparition de Mewtwo, un Pokémon de laboratoire créé avec l'ADN de Mew, l'un des Pokémon les plus rares qui soient. Après s'être échappé du laboratoire, Mewtwo est déterminé à prouver sa supériorité : il invite les meilleurs Dresseurs à un combat de Pokémon sans pareil, et bien sûr, Sacha et ses amis sont ravis de relever le défi.",
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/615VN0Q649L._SY445_.jpg",
      rating: 5,
      trailer: "https://youtu.be/5PpEC86HAWc",
    },
    {
      id: uuidv4(),
      title: "Pokemon: Black and White",
      description:
        "Pokémon version noire et Pokémon version blanche, couramment appelés Pokémon Noir et Pokémon Blanc, sont deux éditions du jeu vidéo de rôle de la série Pokémon développé par Game Freak.",
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/81Aq5gsv7rL._SX342_.jpg",
      rating: 3,
      trailer: "https://youtu.be/uCgg2nvNgxY",
    },
    {
      id: uuidv4(),
      title: "Darkrai",
      description:
        "Sacha pense avoir tout vu en matière de Pokémon, mais est-il prêt à affronter le mystérieux Darkrai dans sa toute dernière fabuleuse aventure ? Alors qu'ils se rendent à un concours Pokémon, nos aventuriers passent par Alamos, ville où se trouve la Tour de l'Espace-Temps.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaZyVi3gOYGy71jlfuFA2srYUiw5bZEqDEQ&usqp=CAU",
      rating: 2,
      trailer: "https://youtu.be/koKPESdDzYU",
    },
  ]);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/movielist"
          render={(props) => (
            <App {...props} movies={movies} setMovies={setMovies} />
          )}
        ></Route>
        <Route
          exact
          path="/movielist/:id"
          render={(props) => <MovieDescription data={movies} {...props} />}
        />
      </Switch>
    </div>
  );
};

export default RouteCompononet;
