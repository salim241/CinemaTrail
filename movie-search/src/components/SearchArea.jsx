import SearchBox from "./SearchBox.jsx";
import Button from "./Button.jsx";

export default function SearchArea() {

    function getInputValue(value) {
        console.log("Input received in parent:", value);
    }

    return (
        <>
            <SearchBox getInputValue = {getInputValue}/>
            <Button />
        </>
    )
}