// import Image from "../assets/oppenheimer.jpg"

export default function MovieCard({movies}) {

    return (
        <div className="h-auto mb-20">

            {console.log(movies)}

            <div className="h-full flex gap-5 overflow-auto scroll-smooth scrollbar-none">

                {
                    movies.map((movie) => (



                        <div key={movie.name} className="h-full cursor-pointer">
                            <div className="h-auto w-48 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-2xl">

                                <div className="h-[60%] rounded-t-lg overflow-hidden">
                                    <img src={movie.image} alt={movie.name} className="rounded-t-lg object-cover" />
                                </div>


                                <div className="h-[40%] pt-2 pb-2 pl-3">
                                    <h3 className="mb-1 text-[var(--text-primary)] font-medium">{movie.name}</h3>
                                    <span className="font-sm text-[var(--text-secondary)]">{movie.othDet}</span>
                                    <p className="mt-1 text-[var(--rating)]"> <span className=" mr-1 text-[var(--rating)]">★</span>{movie.rating}</p>
                                </div>
                            </div>
                        </div>



                    ))
                }

            </div>
        </div>
    )
}
