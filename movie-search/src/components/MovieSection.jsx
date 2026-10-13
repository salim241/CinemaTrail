import PopularMovies from "./PopularMovies.jsx";
import TopRatedMovies from "./TopRatedMovies.jsx";

export default function MovieSection() {

    let movieArr = [
        {
            name: "Oppenheimer",
            othDet: "2023 | Drama",
            rating: "8.3"
        },

        {
            name: "Inception",
            othDet: "2010 | Sci-Fi",
            rating: "8.8"
        },

        {
            name: "Interstellar",
            othDet: "2014 | Sci-Fi",
            rating: "8.7"
        },

        {
            name: "The Dark Knight",
            othDet: "2008 | Action",
            rating: "9.0"
        },

        {
            name: "Joker",
            othDet: "2019 | Thriller",
            rating: "8.3"
        },

        {
            name: "Avengers: Endgame",
            othDet: "2019 | Action",
            rating: "8.4"
        },

        {
            name: "Titanic",
            othDet: "1997 | Romance",
            rating: "7.9"
        },

        {
            name: "Dune: Part Two",
            othDet: "2024 | Sci-Fi",
            rating: "8.5"
        },

        {
            name: "The Shawshank Redemption",
            othDet: "1994 | Drama",
            rating: "9.3"
        },

        {
            name: "Fight Club",
            othDet: "1999 | Thriller",
            rating: "8.8"
        },

        {
            name: "Spider-Man: No Way Home",
            othDet: "2021 | Action",
            rating: "8.2"
        },

        {
            name: "The Matrix",
            othDet: "1999 | Sci-Fi",
            rating: "8.7"
        },

        {
            name: "Gladiator",
            othDet: "2000 | Action",
            rating: "8.5"
        },

        {
            name: "Parasite",
            othDet: "2019 | Thriller",
            rating: "8.5"
        },

        {
            name: "Whiplash",
            othDet: "2014 | Drama",
            rating: "8.5"
        },

        {
            name: "Forrest Gump",
            othDet: "1994 | Drama",
            rating: "8.8"
        },

        {
            name: "The Prestige",
            othDet: "2006 | Mystery",
            rating: "8.5"
        },

        {
            name: "Shutter Island",
            othDet: "2010 | Thriller",
            rating: "8.2"
        },

        {
            name: "The Wolf of Wall Street",
            othDet: "2013 | Crime",
            rating: "8.2"
        },

        {
            name: "Deadpool",
            othDet: "2016 | Comedy",
            rating: "8.0"
        }
    ];

    return (
        <div>
            <PopularMovies popularMovies={movieArr} />
            <TopRatedMovies topRatedMovies = {movieArr}/>
        </div>
    )
}