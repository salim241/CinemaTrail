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
                        <li className="links-style"><a href="/">Home</a></li>
                        <li className="links-style"><a href="/">Movie</a></li>
                        <li className="links-style"><a href="/">TV Shows</a></li>
                        <li className="links-style"><a href="/">Popular</a></li>
                        <li className="links-style"><a href="/">Top Rated</a></li>
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