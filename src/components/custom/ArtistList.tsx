import { useState, useEffect } from "react";
import "../../App.css"
interface Artist {
    id: string;
    name: string;
    popularity: number;
    genres: string[];
    images: { url: string }[];
}

const ArtistsList: React.FC = () => {
    const [artists, setArtists] = useState<Artist[]>([]);

    async function fetchArtists() {
        const token = localStorage.getItem("spotify_token");
        if (!token) {
            return;
        }

        try {
            const response = await fetch(
                "https://api.spotify.com/v1/search?q=Billie&type=artist&limit=10",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`${response.status}`);
            }

            const data = await response.json();
            setArtists(data.artists.items);
        } catch (error) {
            console.error(error);
        }
    }
    console.log(artists);


    useEffect(() => {
        fetchArtists();
    }, []);


    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Список артистов</h2>
            <div className="flex gap-x-4 overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory scrollbar-hidde">
                {artists.map((art) => (
                    <div key={art.id} className=" min-w-[150px] h-[200px]  md:min-w-[180px] h-[300px] snap-center">
                        {art.images.length > 0 ? (
                            <img
                                src={art.images[0].url}
                                alt={art.name}
                                className="w-[100%] h-[150px] md:h-[180px] rounded-lg object-cover"
                            />
                        ) : <img src="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da" className="w-[100%] h-[150px] md:h-[180px] rounded-lg object-cover" alt="naj" />
}
                        <p className="text-start text-[#b3b3b3] text-sm mt-2">{art.name}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ArtistsList;
