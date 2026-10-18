import { useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SearchedMovies from "../components/SearchedMovies";

export default function SearchMovie() {

    //  const [inputValue, setInputValue] = useState("");
    //  const [searchInput, setSearhInput] = useState("");

    //  console.log(inputValue);

    const location = useLocation();

    const inputValue = location.state?.searchQuery || "";


    return (

        <>
            <Hero />
            <SearchedMovies inputValue={inputValue} />
            <Footer />
        </>
    )
}