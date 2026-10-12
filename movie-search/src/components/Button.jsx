export default function Button() {

    let buttonHandle = () =>{
        console.log("Button was clicked");
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