import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MovieCard from "./components/MovieCard.jsx";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [tvShowList, settvShowList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTVShow, setIsLoadingTVShow] = useState(false);
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

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const endpoint = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        setErrorMessage(`Error fetching movies. Please try again.`);
        setMovieList([]);
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        setIsLoading(false);
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

  const fetchTvShows = async () => {
    try {
      setIsLoadingTVShow(true);
      const endpoint = `${BASE_URL}/discover/tv`;

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        setErrorMessage(`Error fetching TV Shows. Please try again.`);
        settvShowList([]);
        setIsLoadingTVShow(false);
        return;
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch TV Shows");
        settvShowList([]);
        setIsLoadingTVShow(false);
        return;
      }

      settvShowList(data.results || []);
    } catch (err) {
      console.log(`Error in fetching TV Shows: ${err}`);
      setErrorMessage(`Error fetching TV Shows. Please try again.`);
    } finally {
      setIsLoadingTVShow(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchTvShows();
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <h1 className="text-white text-xl md:text-3xl mt-10 ml-5 font-bold md:ml-50 md:mt-30">
        Latest Movies
      </h1>
      {isLoading ? (
        <p className="text-red-500 text-2xl">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 ml-20 md:grid-cols-5 md:w-auto md:mx-50 items-center">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      <h1 className="text-white text-xl md:text-3xl mt-10 ml-5 font-bold md:ml-50 md:mt-30">
        Latest TV Shows
      </h1>
      {isLoadingTVShow ? (
        <p className="text-red-500 text-2xl">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 ml-20 md:grid-cols-5 md:w-auto md:mx-50 items-center">
          {tvShowList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
