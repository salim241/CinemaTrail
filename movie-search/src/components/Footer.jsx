import Logo from "../assets/logo.png"

export default function Footer() {
    return (
        <div className="mt-48">
            <div className="bg-[var(--bg-secondary)] p-16 flex justify-around">

                <div>

                    <div className="flex gap-2 cursor-pointer">
                        <img src={Logo} alt="Logo" className="h-full w-8" />
                        <h3 className="footer-texts">
                            Cinema <span className="text-red-500">Trail</span>
                        </h3>
                    </div>


                    <p className="text-[var(--text-primary)]">Discover movies.</p>
                    <p className="text-[var(--text-primary)] mb-4">Explore stories.</p>


                    <p className="text-[var(--text-primary)]">Your next </p>
                    <p className="text-[var(--text-primary)]">favorite movie awaits.</p>

                </div>


                <div>


                    <div className="flex gap-2">
                        <h3 className="footer-texts">Explore</h3>
                    </div>

                    <ul className="text-[var(--text-primary)]">
                        <li className="footer-links"><a href="/" className="hover-links">Home</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Trending</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Popular Movies</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Top Rated</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Upcoming Movies</a></li>
                    </ul>


                </div>





                <div>

                    <div className="flex gap-2">
                        <h3 className="footer-texts">Genres</h3>
                    </div>

                    <ul className="text-[var(--text-primary)]">
                        <li className="footer-links"><a href="/" className="hover-links">Action</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Drama</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Comedy</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Thriller</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Sci-Fi</a></li>
                    </ul>

                </div>




                <div>

                    <div className="flex gap-2">
                        <h3 className="footer-texts">About</h3>
                    </div>

                    <ul className="text-[var(--text-primary)]">
                        <li className="footer-links"><a href="/" className="hover-links">About us</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Contact</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Privacy Policy</a></li>
                        <li className="footer-links"><a href="/" className="hover-links">Terms</a></li>
                    </ul>

                </div>



            </div>

            <div className="bg-[var(--bg-secondary)] flex justify-center border-t-2 border-[var(--border)]">
                <div className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] mt-4 pb-4">
                    <p>© 2026 CinemaTrail. All rights reserved.</p>
                    <p className="text-center">Made with <span className="text-red-500">♥</span> by Salim Ali</p>
                </div>
            </div>

        </div>
    )
}