import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PopularMovies from "../components/PopularMovies";

export default function Popular() {

    const [popularMovies, setPopularMovies] = useState([]);


    useEffect(() => {

        const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;
        const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

        let response = axios.get(url, {
            params: {
                query: `batman`
            },
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

        response.then((res) => {
            setPopularMovies(res.data.results)
        }).catch((err) => console.log(`Error is ${err}`))

    }, [])

    return (
        <>
            <Hero />

            <PopularMovies popularMoviess={popularMovies} />

            <Footer />
        </>
    );
}