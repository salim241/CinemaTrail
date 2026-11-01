import PopularMovies from "./PopularMovies.jsx";
import TopRatedMovies from "./TopRatedMovies.jsx";
import Loader from "./Loader.jsx"
import { useEffect, useState } from "react";


import axios from "axios"

export default function MovieSection() {

    let [popularMovies, setPopularMovies] = useState([])
    let [topRatedMovies, setTopRatedMovies] = useState([])

    let [popLoading, setPopLoading] = useState(true)
    let [topRatLoading, setTopRatLoading] = useState(true)

    useEffect(() => {

        const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
        const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

        let response = axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        response.then((res) => {
            setPopularMovies(res.data.results)
        })
            .catch((err) => console.log(`Error is ${err}`))
            .finally(() => {
                setPopLoading(false)
            })

    }, [])



    useEffect(() => {

        const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
        const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

        let response = axios.get(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        response.then((res) => {
            setTopRatedMovies(res.data.results)
        })
            .catch((err) => console.log(`Error is ${err}`))
            .finally(() => {
                setTopRatLoading(false)
            })

    }, [])

    return (
        <div>
            {popLoading ? ( <Loader /> ) : (<PopularMovies popularMoviess={popularMovies} />)}
            {/* <PopularMovies popularMoviess={popularMovies} /> */}

            {topRatLoading ? ( <Loader /> ) : (<TopRatedMovies topRatedMoviess={topRatedMovies} />)}
            {/* <TopRatedMovies topRatedMoviess={topRatedMovies} /> */}
        </div>
    )
}