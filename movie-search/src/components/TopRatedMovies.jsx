import MovieCard from "./MovieCard.jsx";

export default function TopRatedMovies({movieArr}) {

    let evenIndexMovies = movieArr.filter( (moive, index) =>{
        return index % 2 === 0;
    })

    return (
        <div className="px-14">

            <h2 className="font-semibold text-2xl mb-3 text-[var(--text-primary)]">Top Rated Movies</h2>

            <MovieCard evenIndexMovies = {evenIndexMovies}/>
        </div>
    )
}