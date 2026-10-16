import { useEffect, useState } from "react"
import MovieCard from "./MovieCard.jsx"

import axios from "axios"

export default function SearchedMovies({ inputValue }) {

    const [searchResult, setSearchResult] = useState([])

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

    }, [searchResult])

    return (
        <div>

            {console.log(searchResult)}
            {console.log(`input in searchedMovie is ${inputValue}`)}


            <MovieCard movies = {searchResult}/>
        </div>
    )
}