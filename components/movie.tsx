"use client";

import { useRouter } from "next/navigation";

type MovieType = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

export default function Movie({ movie }: { movie: MovieType}) {
    const images = "http://image.tmdb.org/t/p/w185";
    const router = useRouter();

    return (
        <div
            className="flex flex-col justify-center basis-1/5 text-center mb-2 cursor-pointer"
            onClick={() => {
                router.push(`/movie/${movie.id}`);
            }}
        >
            <div className="rounded-lg w-[100%] overflow-hidden mb-2">
                <img
                    className="w-[100%] transition-all hover:scale-110"
                    src={images + movie.poster_path}
                    alt=""
                />
            </div>
            <h3>{movie.title}</h3>
            <span className="text-gray-400">
                {movie.release_date.split("-")[0]}
            </span>
        </div>
    )
}