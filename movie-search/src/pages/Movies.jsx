import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

export default function Movies() {
    return (
        <div>
            <Hero />
            <div className="py-8">
                <MovieSection />
            </div>
            <Footer />
        </div>
    )
}