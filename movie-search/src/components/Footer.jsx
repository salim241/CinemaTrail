import Logo from "../assets/logo.png"

export default function Footer() {
    return (
        <div className="flex justify-around">

            <div>

                <div className="flex gap-2 cursor-pointer">
                    <img src={Logo} alt="Logo" className="h-fulll w-8" />
                    <h3 className="
                                text-[var(--text-primary)] 
                                font-bold
                                text-2xl
                                
                                ">

                        Cinema <span className="text-red-500">Trail</span>
                    </h3>
                </div>


                <p className="text-[var(--text-primary)]">Discover movies.</p>
                <p className="text-[var(--text-primary)]">Explore stories.</p>


                <p className="text-[var(--text-primary)]">Your next </p>
                <p className="text-[var(--text-primary)]">favorite movie</p>
                <p className="text-[var(--text-primary)]"> awaits.</p>

            </div>


            <div>


                <div className="flex gap-2">
                    <h3 className="
                                text-[var(--text-primary)] 
                                font-bold
                                text-2xl
                                
                                ">

                        Explore
                    </h3>
                </div>

                <ul className="text-[var(--text-primary)]">
                    <li className="links-style"><a href="/" className="hover-links">Home</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Trending</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Popular Movies</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Top Rated</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Upcoming Movies</a></li>
                </ul>


            </div>





            <div>

                <div className="flex gap-2">
                    <h3 className="
                                text-[var(--text-primary)] 
                                font-bold
                                text-2xl
                                
                                ">

                        Genres
                    </h3>
                </div>

                <ul className="text-[var(--text-primary)]">
                    <li className="links-style"><a href="/" className="hover-links">Action</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Drama</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Comedy</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Thriller</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Sci-Fi</a></li>
                </ul>

            </div>




            <div>

                <div className="flex gap-2">
                    <h3 className="
                                text-[var(--text-primary)] 
                                font-bold
                                text-2xl
                                
                                ">

                        About
                    </h3>
                </div>

                <ul className="text-[var(--text-primary)]">
                    <li className="links-style"><a href="/" className="hover-links">About us</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Contact</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Privacy Policy</a></li>
                    <li className="links-style"><a href="/" className="hover-links">Terms</a></li>
                </ul>

            </div>



        </div>
    )
}