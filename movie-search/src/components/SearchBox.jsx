export default function SearchBox(){
    return(
        <div className="w-3/4 h-9/10 bg-[var(--bg-secondary)] rounded-lg px-4">
            <input type="text" placeholder="Search for movies, TV Shows..."
            className="w-full h-full 
                placeholder:text-[var(--text-secondary)] 
                text-[var(--text-secondary)] 
                outline-none
                "/>
        </div>
    )
}