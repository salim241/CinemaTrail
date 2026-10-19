export default function MovieDetails({ movie, credits }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/";

    const director = credits?.crew?.find(
        (person) => person.job === "Director"
    );

    const writers = credits?.crew?.filter(
        (person) =>
            person.job === "Writer" ||
            person.job === "Screenplay" ||
            person.job === "Story"
    ) || [];


    const uniqueWriters = [
        ...new Map(writers.map((writer) => [writer.id, writer])).values(),
    ];

    const cast = credits?.cast?.slice(0, 6) || [];

    return (
        <main className="min-h-screen bg-[#080B14] text-white">

            <section className="relative isolate overflow-hidden">

                {movie.backdrop_path && (
                    <div className="absolute inset-0 -z-10 h-[650px]">
                        <img
                            src={`${imageBaseUrl}original${movie.backdrop_path}`}
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                )}

                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080B14] via-[#080B14]/90 to-[#080B14]/50" />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#080B14] via-[#080B14]/30 to-black/40" />

                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:gap-12 md:py-20">

                    <div className="mx-auto w-56 shrink-0 overflow-hidden rounded-xl shadow-2xl shadow-black/50 md:mx-0 md:w-72">
                        {movie.poster_path ? (
                            <img
                                src={`${imageBaseUrl}w500${movie.poster_path}`}
                                alt={`${movie.title} poster`}
                                className="w-full object-cover"
                            />
                        ) : (
                            <div className="flex aspect-[2/3] items-center justify-center bg-gray-800 text-gray-400">
                                No poster available
                            </div>
                        )}
                    </div>

                    <div className="max-w-3xl">

                        <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-orange-400">
                            Movie Details
                        </p>

                        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
                            {movie.title}
                        </h1>

                        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-gray-300 md:text-base">

                            {movie.release_date && (
                                <span>
                                    {movie.release_date.slice(0, 4)}
                                </span>
                            )}

                            {movie.runtime > 0 && (
                                <>
                                    <span className="text-gray-500">•</span>

                                    <span>
                                        {Math.floor(movie.runtime / 60)}h{" "}
                                        {movie.runtime % 60}m
                                    </span>
                                </>
                            )}

                            <span className="text-gray-500">•</span>

                            <span className="rounded-md bg-yellow-500/15 px-3 py-1 font-semibold text-yellow-400">
                                ★ {movie.vote_average?.toFixed(1) ?? "N/A"} / 10
                            </span>
                        </div>

                        <div className="mb-6 flex flex-wrap gap-2">
                            {movie.genres?.map((genre) => (
                                <span
                                    key={genre.id}
                                    className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-gray-200"
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>

                        {movie.tagline && (
                            <p className="mb-4 text-lg italic text-orange-300">
                                "{movie.tagline}"
                            </p>
                        )}

                        <h2 className="mb-2 text-xl font-semibold">
                            Overview
                        </h2>

                        <p className="mb-8 max-w-2xl leading-7 text-gray-300">
                            {movie.overview ||
                                "No overview available for this movie."}
                        </p>

                        <div className="flex flex-wrap gap-4">

                            {movie.homepage && (
                                <a
                                    href={movie.homepage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                                >
                                    Official Website ↗
                                </a>
                            )}

                            {movie.imdb_id && (
                                <a
                                    href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
                                >
                                    View on IMDb ↗
                                </a>
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">

                <div>

                    <h2 className="mb-6 border-b border-white/10 pb-3 text-2xl font-bold">
                        Movie Information
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <p className="text-sm text-gray-400">
                                Release Date
                            </p>

                            <p className="mt-1 font-medium">
                                {movie.release_date || "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Runtime
                            </p>

                            <p className="mt-1 font-medium">
                                {movie.runtime > 0
                                    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60
                                    }m`
                                    : "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Director
                            </p>

                            <p className="mt-1 font-medium">
                                {director?.name || "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Writers
                            </p>

                            <p className="mt-1 font-medium">
                                {uniqueWriters.length > 0
                                    ? uniqueWriters
                                        .map((writer) => writer.name)
                                        .join(", ")
                                    : "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Production Companies
                            </p>

                            <p className="mt-1 font-medium">
                                {movie.production_companies?.length
                                    ? movie.production_companies
                                        .map((company) => company.name)
                                        .join(", ")
                                    : "Not available"}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Original Language
                            </p>

                            <p className="mt-1 font-medium uppercase">
                                {movie.original_language || "Not available"}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="md:col-span-2">

                    <h2 className="mb-6 border-b border-white/10 pb-3 text-2xl font-bold">
                        Top Cast
                    </h2>

                    {cast.length > 0 ? (
                        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">

                            {cast.map((actor) => (
                                <div
                                    key={actor.id}
                                    className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-orange-400/50"
                                >

                                    {actor.profile_path ? (
                                        <img
                                            src={`${imageBaseUrl}w185${actor.profile_path}`}
                                            alt={actor.name}
                                            loading="lazy"
                                            className="h-48 w-full object-cover object-top"
                                        />
                                    ) : (
                                        <div className="flex h-48 items-center justify-center bg-gray-800 text-sm text-gray-400">
                                            No photo available
                                        </div>
                                    )}

                                    <div className="p-3">

                                        <h3 className="font-semibold">
                                            {actor.name}
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-400">
                                            {actor.character ||
                                                "Character not listed"}
                                        </p>

                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <p className="text-gray-400">
                            Cast information is unavailable.
                        </p>
                    )}

                </div>
            </section>
        </main>
    );
}