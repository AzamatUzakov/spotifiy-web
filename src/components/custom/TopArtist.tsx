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

const TopArtist: React.FC = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    const token: string = localStorage.getItem("token") || " ";

    useEffect(() => {
        const getTracks = async () => {
            try {
                const response = await fetch(BASE_URL + "/me/top/artists", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                setTracks(data.items);
            } catch (err) {
                console.error(err);
            }
        };

        getTracks();
    }, []);
console.log(tracks);

    return (
        <div className="p-4 mt-5">
            <h2 className="text-2xl font-bold mb-4">Топ Артисты</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">                {tracks.map((artist: any) => (
                    <div
                        key={artist.id}
                        className="bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition-colors duration-200 group cursor-pointer"
                    >
                        <div className="relative mb-4">
                            <img
                                src={artist.images[0]?.url || ""}
                                alt={artist.name}
                                className="w-full aspect-square object-cover rounded-full shadow-lg"
                            />
                        </div>
                        <h3 className="font-medium truncate text-center">
                            {artist.name}
                        </h3>
                        <p className="text-neutral-400 text-sm truncate text-center">
                            {artist.genres[0] || "Artist"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    ); 
};

export default TopArtist;
