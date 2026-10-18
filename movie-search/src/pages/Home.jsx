import Hero from "../components/Hero.jsx"
import Footer from "../components/Footer.jsx"
import MovieSection from "../components/MovieSection.jsx"
import SearchedMovies from "../components/SearchedMovies.jsx"
import PosterSlider from "../components/PosterSlider.jsx"

import { useState } from "react"

export default function Home() {

    return (
        <>
            <Hero />
            <PosterSlider />
            <MovieSection />
            <Footer />
        </>
    )
}