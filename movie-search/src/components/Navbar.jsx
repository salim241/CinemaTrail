import SearchBox from "./SearchBox.jsx"
import Button from "./Button.jsx"

export default function Navbar() {
    return (
        <div>
            <div className="
            h-14 w-full 
            max-md:w-full 
            flex justify-around items-center
            
            ">

                <h3 className="
                text-[var(--text-primary)] 
                font-bold
                text-2xl
                
                ">

                    Cinema <span className="text-red-500">Trail</span>
                </h3>

                <div className="w-3/10">
                    <ul className="flex justify-between">
                        <li className="links-style"><a href="/" className="hover-links">Home</a></li>
                        <li className="links-style"><a href="/" className="hover-links">Movie</a></li>
                        <li className="links-style"><a href="/" className="hover-links">TV Shows</a></li>
                        <li className="links-style"><a href="/" className="hover-links">Popular</a></li>
                        <li className="links-style"><a href="/" className="hover-links">Top Rated</a></li>
                    </ul>
                </div>

                <div className="w-3/10 h-7/10 flex justify-around">
                    <SearchBox />
                    <Button />
                </div>

            </div>
        </div>
    )
}