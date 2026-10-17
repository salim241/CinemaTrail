import Logo from "../assets/logo.png"

import {Link} from "react-router-dom"

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
                        <li className="footer-links"><Link to="/" className="hover-links">Home</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Trending</Link></li>
                        <li className="footer-links"><Link to="/popular" className="hover-links">Popular Movies</Link></li>
                        <li className="footer-links"><Link to="/toprated" className="hover-links">Top Rated</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Upcoming Movies</Link></li>
                    </ul>


                </div>





                <div>

                    <div className="flex gap-2">
                        <h3 className="footer-texts">Genres</h3>
                    </div>

                    <ul className="text-[var(--text-primary)]">
                        <li className="footer-links"><Link to="/" className="hover-links">Action</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Drama</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Comedy</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Thriller</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Sci-Fi</Link></li>
                    </ul>

                </div>




                <div>

                    <div className="flex gap-2">
                        <h3 className="footer-texts">About</h3>
                    </div>

                    <ul className="text-[var(--text-primary)]">
                        <li className="footer-links"><Link to="/" className="hover-links">About us</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Contact</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Privacy Policy</Link></li>
                        <li className="footer-links"><Link to="/" className="hover-links">Terms</Link></li>
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