import Hero from "./components/Hero.jsx"
import Footer from "./components/Footer.jsx"
import MovieSection from "./components/MovieSection.jsx"
import SearchedMovies from "./components/SearchedMovies.jsx"
import PosterSlider from "./components/PosterSlider.jsx"
import { useState } from "react"

function App() {

  const [isSearching, setIsSearching] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Hero setIsSearching={setIsSearching} setInputValue={setInputValue} />

      { isSearching ? "" : <PosterSlider />}

      {isSearching ? <SearchedMovies inputValue={inputValue} /> : <MovieSection />}

      <Footer />
    </div>
  )
}

export default App
