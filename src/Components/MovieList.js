import { Container } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies, match }) => {
  console.log(movies);
  console.log(match);
  return (
    <div>
      <Container className="movieList">
        {movies.map((movie) => (
          <Link key={movie.id} to={`${match.url}/${movie.id}`}>
            <MovieCard key={movie.id} mCard={movie} />
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default MovieList;
