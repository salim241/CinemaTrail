import SearchBox from "./SearchBox.jsx";
import Button from "./Button.jsx";
import { useState } from "react";

export default function SearchArea() {

    const [searchInput, setSearhInput] = useState("");

    return (
        <>
            <SearchBox setSearhInput={setSearhInput} />
            <Button searchInput = {searchInput} />
        </>
    )
}