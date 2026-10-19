import { useNavigate } from "react-router-dom"

export default function Button({ searchInput }) {

    const navigate = useNavigate();

    let buttonHandle = () => {
        const query = searchInput.trim();

        if (!query) return;

        navigate("/searchpage", {
            state: {
                searchQuery: query
            }
        });
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