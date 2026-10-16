import SearchBox from "./SearchBox.jsx";
import Button from "./Button.jsx";
import { useState } from "react";

export default function SearchArea({setIsSearching, setInputValue}) {

    const [searchInput, setSearhInput] = useState("");

    // function getInputValue(value) {
    //     console.log(`input in parent is ${value}`)
    // }

    return (
        <>
            <SearchBox setSearhInput={setSearhInput} />
            <Button searchInput = {searchInput} setIsSearching = {setIsSearching} setInputValue = {setInputValue}/>
        </>
    )
}