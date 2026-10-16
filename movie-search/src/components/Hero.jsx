import Navbar from "./Navbar.jsx"
import PosterSlider from "./PosterSlider.jsx"

export default function Hero({setIsSearching, setInputValue}) {
    return (
        <>
            <Navbar setIsSearching = {setIsSearching} setInputValue = {setInputValue}/>
            <PosterSlider />
        </>
    )
}