import { useEffect, useState } from "react"

import axios from "axios"

import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function TopRated() {

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    let [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {

        const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
        const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

        let response = axios.get(url, {
            params: {
                query: `batman`
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        response.then((res) => {
            setTopRatedMovies(res.data.results)
        }).catch((err) => console.log(`Error is ${err}`))

    }, [])

    return (
        <>

            <Hero />


            <div className="min-h-screen px-6 py-8">


                <h2 className="font-semibold text-2xl mb-3 text-[var(--text-primary)]">Top Rated Movies</h2>


                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                    {topRatedMovies
                        .filter((movie) => movie.vote_average !== 0 && movie.poster_path)
                        .map((movie) => (

                            <div

                                key={movie.id}
                                className="min-w-0 cursor-pointer"
                            >
                                <div className="h-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)] shadow-lg">


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

            </div>

            <Footer />

        </>
    );
}