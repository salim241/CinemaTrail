export default function Button({searchInput, setIsSearching, setInputValue}) {

    let buttonHandle = () =>{
        console.log(`value in button is ${searchInput}`);
        setInputValue(searchInput)
        setIsSearching(true);
    }

    return (
        <div className="1/4 h-full">
            <button className="h-9/10 px-4 
                bg-[var(--accent)] 
                text-[var(--text-primary)] 
                rounded-lg 
                cursor-pointer
                hover:bg-[var(--accent-hover)]
                " onClick={buttonHandle}>
                Search</button>
        </div>
    )
}