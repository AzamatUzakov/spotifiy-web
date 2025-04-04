import { useState, useEffect } from "react";
import "../../App.css";
import { BASE_URL } from "@/export";

interface Artist {
    id: string;
    name: string;
}

interface Track {
    id: string;
    name: string;
    artists: Artist[];
    album: {
        images: { url: string }[];
    };
}

const MyRecamindation: React.FC = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    const token: string = localStorage.getItem("token") || " ";

    useEffect(() => {
        const getTracks = async () => {
            try {
                const response = await fetch(BASE_URL + "/me/tracks", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                const tracksData = data.items.map((item: { track: Track }) => item.track);
                setTracks(tracksData);
            } catch (err) {
                console.error(err);
            }
        };

        getTracks();
    }, []);
console.log(tracks);

    return (
        <div className="p-4 mt-5">
            <h2 className="text-2xl font-bold mb-4">Ваш плейлист</h2>
            <div className="flex overflow-x-auto gap-6 py-4">
                {tracks.map((track) => (
                    <div
                        key={track.id}
                        className="flex-none w-40 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                    >
                        <div className="relative mb-4">
                            <img
                                src={track.album.images[0].url}
                                alt={track.name}
                                className="w-full aspect-square object-cover rounded shadow-lg group-hover:opacity-80 transition-opacity"
                            />
                            <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 transition-transform hover:scale-105">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>

                        <h3 className="font-semibold text-white truncate">{track.name}</h3>
                        <p className="text-gray-400 text-sm truncate">
                            {track.artists.map((artist) => artist.name).join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyRecamindation;
