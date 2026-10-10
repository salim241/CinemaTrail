import Poster from "../assets/poster1.png";

export default function PosterSlider() {
    return (
        <section className="relative isolate h-84 w-full overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">


            <div
                className="absolute inset-0 -z-20 bg-cover bg-[center_15%] bg-no-repeat"
                style={{
                    backgroundImage: `url(${Poster})`,
                }}
            />

            {/* Strong Left Gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-primary)] from-0% via-[var(--bg-primary)]/95 via-35% via-[var(--bg-primary)]/75 via-50% to-transparent to-80%" />

            {/* Right Edge Blend */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[var(--bg-primary)]/70 from-0% via-[var(--bg-primary)]/20 via-15% to-transparent to-35%" />




            <div className="relative flex h-full items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

                <div className="w-full max-w-xl">



                    <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[var(--accent)] sm:text-sm">
                        Featured Movie
                    </p>



                    <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                        John Wick: Chapter 4
                    </h1>




                    <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)] sm:text-base">

                        <span>2023</span>

                        <span className="text-white/30">|</span>

                        <span>Action / Thriller</span>

                        <span className="text-white/30">|</span>

                        <span>2h 49m</span>

                        <span className="flex items-center gap-1">
                            <span className="text-[var(--rating)]">★</span>
                            <span className="text-[var(--text-primary)]">7.8/10</span>
                        </span>

                    </div>




                    <p className="mb-4 max-w-xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base sm:leading-7">
                        John Wick uncovers a path to defeating the High Table. But before
                        he can earn his freedom, Wick must face a new enemy with powerful
                        alliances across the globe.
                    </p>





                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">

                        <button
                            type="button"
                            className="flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--accent-hover)] sm:px-7 sm:text-base"
                        >
                            <i className="fa-solid fa-play" aria-hidden="true"></i>
                            Watch Trailer
                        </button>

                        <button
                            type="button"
                            className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white hover:bg-white/10 sm:px-7 sm:text-base"
                        >
                            View Details
                        </button>

                    </div>

                </div>
            </div>

        </section>
    );
}