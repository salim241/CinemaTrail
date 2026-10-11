import Image from "../assets/oppenheimer.jpg"

export default function MovieCard() {

    return (
        <div className="px-14">
            <h2 className="text-[var(--text-primary)]">Popular Movies</h2>
            <div className="flex gap-6">
                <div>
                    <div className="w-52 bg-[var(--bg-card)]">

                        <div className="h-1/2">
                            <img src={Image} alt="oppenheimer" />
                        </div>


                        <div className="text-white">
                            <h3>Oppenheimer</h3>
                            <span>2023 | Drama</span>
                            <p><span className="text-[var(--rating)]">★</span>8.3</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-52 bg-[var(--bg-card)]">

                        <div className="h-1/2">
                            <img src={Image} alt="oppenheimer" />
                        </div>


                        <div className="text-white">
                            <h3>Oppenheimer</h3>
                            <span>2023 | Drama</span>
                            <p><span className="text-[var(--rating)]">★</span>8.3</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="w-52 bg-[var(--bg-card)]">

                        <div className="h-1/2">
                            <img src={Image} alt="oppenheimer" />
                        </div>


                        <div className="text-white">
                            <h3>Oppenheimer</h3>
                            <span>2023 | Drama</span>
                            <p><span className="text-[var(--rating)]">★</span>8.3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}