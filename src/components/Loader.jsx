export default function Loader() {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">

                <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-red-500 animate-spin"></div>

                <p className="text-[var(--text-secondary)] font-medium">
                    Loading...
                </p>

            </div>
        </div>
    );
}