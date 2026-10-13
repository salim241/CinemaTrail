import Image from "../assets/oppenheimer.jpg"

export default function MovieCard({movies}) {

    return (
        <div className="h-64 mb-20">

            {console.log(movies)}

            <div className="flex gap-5 overflow-auto scroll-smooth scrollbar-none">

                {
                    movies.map((movie) => (



                        <div key={movie.name} className="h-full cursor-pointer">
                            <div className="h-auto w-48 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-2xl">

                                <div className="h-[65%] rounded-t-lg">
                                    <img src={Image} alt="oppenheimer" className="rounded-t-lg" />
                                </div>


                                <div className="h-[35%] pt-2 pb-2 pl-3">
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
