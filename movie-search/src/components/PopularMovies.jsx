import MovieCard from "./MovieCard.jsx";

export default function PopularMovies({popularMovies}) {

    let oddIndexMovies = popularMovies.filter((movie, index) => {
        return index % 2 != 0;
    });

    return (
        <div className="px-14">

            <h2 className="font-semibold text-2xl mb-3 text-[var(--text-primary)]">Popular Movies</h2>

            <MovieCard  movies = {oddIndexMovies}/>
        </div>
    )
}