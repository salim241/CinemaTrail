import { useEffect, useState } from "react"

import axios from "axios"

export default function SearchedMovies({ inputValue }) {

    const [searchResult, setSearchResult] = useState([])
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {

        const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
        const url = "https://api.themoviedb.org/3/search/movie";

        let response = axios.get(url, {
            params: {
                query: `${inputValue}`
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        response.then((res) => {
            setSearchResult(res.data.results)
        }).catch((err) => console.log(`Error is ${err}`))

    }, [])

    return (
        <div className="min-h-screen px-6 py-8">

            {/* Search Results Heading */}
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Search Results for <span className="font-bold text-[var(--rating)]"> "{inputValue}"</span>
            </h2>

            {/* Movie Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                {searchResult
                    .filter((movie) => movie.vote_average !== 0 && movie.poster_path)
                    .map((movie) => (

                        <div

                            key={movie.id}
                            className="min-w-0 cursor-pointer"
                        >
                            <div className="h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)] shadow-lg">

                                {/* Movie Poster */}
                                <div className="aspect-[2/3] w-full overflow-hidden">
                                    <img
                                        src={
                                            movie.poster_path
                                                ? imageBaseUrl + movie.poster_path
                                                : "/placeholder-poster.png"
                                        }
                                        alt={movie.title || "Movie poster"}
                                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* Movie Details */}
                                <div className="p-3">

                                    <h3 className="mb-2 line-clamp-2 font-semibold text-[var(--text-primary)]">
                                        {movie.title}
                                    </h3>

                                    <p className="mb-2 text-sm text-[var(--text-secondary)]">
                                        {movie.release_date || "Release date unavailable"}
                                    </p>

                                    <p className="font-medium text-[var(--rating)]">
                                        <span className="mr-1">★</span>
                                        {typeof movie.vote_average === "number"
                                            ? movie.vote_average.toFixed(1)
                                            : "N/A"}
                                    </p>

                                </div>
                            </div>
                        </div>

                    ))}

            </div>

            {/* Empty Search Results */}
            {searchResult.length === 0 && (
                <p className="mt-10 text-center text-[var(--text-secondary)]">
                    No movies found. Try searching for another movie.
                </p>
            )}

        </div>
    );
}