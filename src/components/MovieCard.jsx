const MovieCard = ({ movie: { title, poster_path, release_date } }) => {
  return (
    <div className="w-50 h-auto bg-slate-800 mt-20 rounded-lg justify-center">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="movie poster"
        className="rounded-lg h-70 w-50 p-4"
      />
      <h3 className="text-white pl-2">{title}</h3>
      <p className="text-white pb-2 pl-2">{release_date.split("-")[0]}</p>
    </div>
  );
};

export default MovieCard;
