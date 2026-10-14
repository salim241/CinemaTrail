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

export default function MovieSection() {

    let movieArr = [
        {
            name: "Oppenheimer",
            othDet: "2023 | Drama",
            rating: "8.3",
            image: {Oppenheimer}
        },

        {
            name: "Inception",
            othDet: "2010 | Sci-Fi",
            rating: "8.8",
            image: {inception}
        },

        {
            name: "Interstellar",
            othDet: "2014 | Sci-Fi",
            rating: "8.7",
            image: {interstellar}
        },

        {
            name: "The Dark Knight",
            othDet: "2008 | Action",
            rating: "9.0",
            image: {the_dark_knight}
        },

        {
            name: "Joker",
            othDet: "2019 | Thriller",
            rating: "8.3",
            image: {joker}
        },

        {
            name: "Avengers: Endgame",
            othDet: "2019 | Action",
            rating: "8.4",
            image: {avengers}
        },

        {
            name: "Titanic",
            othDet: "1997 | Romance",
            rating: "7.9",
            image: {titanic}
        },

        {
            name: "Dune: Part Two",
            othDet: "2024 | Sci-Fi",
            rating: "8.5",
            image: {dune2}
        },

        {
            name: "The Shawshank Redemption",
            othDet: "1994 | Drama",
            rating: "9.3",
            image: {the_shawshank_redemption}
        },

        {
            name: "Fight Club",
            othDet: "1999 | Thriller",
            rating: "8.8",
            image: {fight_club}
        },

        {
            name: "Spider-Man: No Way Home",
            othDet: "2021 | Action",
            rating: "8.2",
            image: {spiderman}
        },

        {
            name: "The Matrix",
            othDet: "1999 | Sci-Fi",
            rating: "8.7",
            image: {the_matrix}
        },

        {
            name: "Gladiator",
            othDet: "2000 | Action",
            rating: "8.5",
            image: {gladiator}
        },

        {
            name: "Parasite",
            othDet: "2019 | Thriller",
            rating: "8.5",
            image: {parasite}
        },

        {
            name: "Whiplash",
            othDet: "2014 | Drama",
            rating: "8.5",
            image: {whiplash}
        },

        {
            name: "Forrest Gump",
            othDet: "1994 | Drama",
            rating: "8.8",
            image: {forest_gump}
        },

        {
            name: "The Prestige",
            othDet: "2006 | Mystery",
            rating: "8.5",
            image: {the_prestige}
        },

        {
            name: "Shutter Island",
            othDet: "2010 | Thriller",
            rating: "8.2",
            image: {shutter_island}
        },

        {
            name: "The Wolf of Wall Street",
            othDet: "2013 | Crime",
            rating: "8.2",
            image: {the_wolf_of_wall_street}
        },

        {
            name: "Deadpool",
            othDet: "2016 | Comedy",
            rating: "8.0",
            image: {deadpool}
        }
    ];

    return (
        <div>
            <PopularMovies popularMovies={movieArr} />
            <TopRatedMovies topRatedMovies = {movieArr}/>
        </div>
    )
}