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

const MyAlbum: React.FC = () => {
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
                console.log(data);
                setArtists(data.albums.items)
                
            } catch (err) {
                console.error(err);
            }
        };

        getAlbums();
    }, []);
    console.log(artists);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Ваш альбом</h2>
          {  <div className="flex gap-x-4 overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory scrollbar-hidde">
                {artists.map((art) => (
                    <div key={art.id} className="min-w-[150px] md:min-w-[180px]  snap-center hover:scale-96 transition-transform cursor-pointer" >                        {art.images.length > 0 ? (
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
            </div>}
        </div>

    );
};

export default MyAlbum;
