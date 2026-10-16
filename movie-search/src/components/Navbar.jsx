import SearchArea from "./SearchArea.jsx"

import Logo from "../assets/logo.png"

export default function Navbar({setIsSearching, setInputValue}) {
    return (
        <div>
            <div className="
            h-16 w-full 
            max-md:w-full 
            flex justify-around items-center
            border-b border-[var(--border)]
            ">

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
                    <SearchArea setIsSearching = {setIsSearching} setInputValue = {setInputValue}/>
                </div>

            </div>
        </div>
    )
}