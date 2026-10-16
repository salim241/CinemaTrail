export default function MovieCard({movies}) {

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="h-auto mb-20">

            {console.log(movies)}

            <div className="h-full flex gap-5 overflow-auto scroll-smooth scrollbar-none">

                {
                    movies.map((movie) => (



                        <div key={movie.title} className="h-full cursor-pointer">
                            <div className="h-auto w-48 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-2xl">

                                <div className="h-[60%] rounded-t-lg overflow-hidden">
                                    <img src={imageBaseUrl+movie.poster_path} alt={movie.title} className="rounded-t-lg object-cover" />
                                </div>


                                <div className="h-[40%] pt-2 pb-2 pl-3">
                                    <h3 className="mb-1 text-[var(--text-primary)] font-medium">{movie.title}</h3>
                                    <span className="font-sm text-[var(--text-secondary)]">{movie.release_date}</span>
                                    <p className="mt-1 text-[var(--rating)]"> <span className=" mr-1 text-[var(--rating)]">★</span>{movie.vote_average}</p>
                                </div>
                            </div>
                        </div>



                    ))
                }

            </div>
        </div>
    )
}
