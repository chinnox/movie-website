import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MovieCard from "./components/MovieCard.jsx";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzgyZTM2MDQzYzJmYjY2NDdhNzIzMGRkYmUxY2Y2NSIsIm5iZiI6MTc0Mzg0OTY5NC42LCJzdWIiOiI2N2YxMDhkZWIzZTAzNTI4NmNkOThkODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FgoA6z0y9bvKaglWBe-DEuC394p8-wZJCJm-j8ds6js";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // const fetchMovies = async () => {
  //   const endpoint = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

  //   try {
  //     setIsLoading(true);
  //     await fetch(endpoint, options)
  //       .then((res) => res.json())
  //       .then((res) => setMovieList(res))
  //       .catch((err) => console.error(err));
  //   } catch (err) {
  //     console.log(`Error in fetching movies: ${err}`);
  //     setErrorMessage(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const fetchMovies = async () => {
    try {
      const endpoint = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        setErrorMessage(`Error fetching movies. Please try again.`);
        setMovieList([]);
        return;
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (err) {
      console.log(`Error in fetching movies: ${err}`);
      setErrorMessage(`Error fetching movies. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <h1 className="text-white text-3xl font-bold ml-50 mt-30">
        Latest Movies
      </h1>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="grid grid-cols-5 w-auto mx-50 items-center justify-center">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
