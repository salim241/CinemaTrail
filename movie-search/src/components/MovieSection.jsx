import PopularMovies from "./PopularMovies.jsx";
import TopRatedMovies from "./TopRatedMovies.jsx";
import dune2 from "../assets/dune_part2.jpg";
import forest_gump from "../assets/forest_gump.jpg";
import inception from "../assets/inception.jpg";
import interstellar from "../assets/interstellar.jpg";
import shutter_island from "../assets/shutter_island.jpg";
import spiderman from "../assets/spiderman.jpg";
import the_dark_knight from "../assets/the_dark_knight.jpg";
import the_prestige from "../assets/the_prestige.jpg";
import the_shawshank_redemption from "../assets/the_shawshank_redemption.jpg";
import whiplash from "../assets/whiplash.jpg";
import avengers from "../assets/avengers.jpg";
import deadpool from "../assets/deadpool.jpg";
import fight_club from "../assets/fight_club.jpg";
import joker from "../assets/joker.jpg";
import parasite from "../assets/parasite.jpg";
import the_matrix from "../assets/the_matrix.jpg";
import titanic from "../assets/titanic.jpg";
import gladiator from "../assets/gladiator.jpg";
import the_wolf_of_wall_street from "../assets/the_wolf_of_wall_street.jpg";
import oppenheimer from "../assets/oppenheimer.jpg";
import { useEffect, useState } from "react";


import axios from "axios"

export default function MovieSection() {

    let [popularMovies, setPopularMovies] = useState([])
    let [topRatedMovies, setTopRatedMovies] = useState([])

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
        <div>
            <PopularMovies popularMoviess={popularMovies} />
            <TopRatedMovies topRatedMoviess={topRatedMovies} />
        </div>
    )
}