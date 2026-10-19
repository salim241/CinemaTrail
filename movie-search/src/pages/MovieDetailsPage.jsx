import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieDetails from "../components/MovieDetails";

export default function MovieDetailsPage() {
    
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const accessToken = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN;

        async function fetchMovieDetails() {
            setLoading(true);
            setError("");
            setMovie(null);
            setCredits(null);

            try {
                const headers = {
                    Authorization: `Bearer ${accessToken}`,
                };

                const [movieResponse, creditsResponse] = await Promise.all([
                    axios.get(
                        `https://api.themoviedb.org/3/movie/${id}`,
                        { headers }
                    ),
                    axios.get(
                        `https://api.themoviedb.org/3/movie/${id}/credits`,
                        { headers }
                    ),
                ]);

                setMovie(movieResponse.data);
                setCredits(creditsResponse.data);
            } catch (err) {
                console.error("Error fetching movie details:", err);
                setError(
                    "Unable to load movie details. Please try again later."
                );
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    return (
        <>
            <Hero />

            {loading ? (
                <div className="flex min-h-screen items-center justify-center bg-[#080B14]">
                    <p className="text-lg text-white">
                        Loading movie details...
                    </p>
                </div>
            ) : error ? (
                <div className="flex min-h-screen items-center justify-center bg-[#080B14] px-6">
                    <p className="text-center text-red-400">{error}</p>
                </div>
            ) : (
                <MovieDetails movie={movie} credits={credits} />
            )}

            <Footer />
        </>
    );
}