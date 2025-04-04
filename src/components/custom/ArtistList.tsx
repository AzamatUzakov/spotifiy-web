import { useState, useEffect } from "react";
import "../../App.css"
import { BASE_URL } from "@/export";
interface Artist {
    id: string;
    name: string;
    popularity: number;
    genres: string[];
    images: { url: string }[];
}

const ArtistsList: React.FC = () => {
    const [artists, setArtists] = useState<Artist[]>([]);

    const token: string = localStorage.getItem("token") || " ";

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const response = await fetch(BASE_URL + "/browse/new-releases", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                console.log(token, "token-azamat");

                const data = await response.json();
                setArtists(data.albums.items)
                
            } catch (err) {
                console.error(err);
            }
        };

        getAlbums();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Новые релизы</h2>
            <div className="flex overflow-x-auto gap-6 py-4">
                {artists.map((art) => (
                    <div
                        key={art.id}
                        className="flex-none w-40 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
                    >
                        <div className="relative mb-4">
                            <img
                                src={
                                    art.images.length > 0
                                        ? art.images[0].url
                                        : "https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da"
                                }
                                alt={art.name}
                                className="w-full aspect-square object-cover rounded shadow-lg group-hover:opacity-80 transition-opacity"
                            />

                            {/* Кнопка Play */}
                            <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 transition-transform hover:scale-105">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>

                        <h3 className="font-semibold text-white truncate">{art.name}</h3>
                        <p className="text-gray-400 text-sm truncate">
                            {art.artists.map((artist) => artist.name).join(", ")}
                        </p>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default ArtistsList;
