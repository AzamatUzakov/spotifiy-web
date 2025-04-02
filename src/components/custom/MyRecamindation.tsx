import { useState, useEffect } from "react";
import "../../App.css";
import { BASE_URL } from "@/export";

interface Artist {
    id: string;
    name: string;
}

interface Album {
    name: string;
}

interface Track {
    id: string;
    name: string;
    images: { url: string }[];
    album: Album;
    artists: Artist[];
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
                console.log(data.items); 
                const tracksData = data.items.map((item: { track: Track }) => item.track);
                setTracks(tracksData);

            } catch (err) {
                console.error(err);
            }
        };

        getTracks();
    }, []);

    return (
        <div className="p-4 mt-5">
            <h2 className="text-2xl font-bold mb-4">Ваш плейлист</h2>
            <div className="flex gap-x-4 overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory scrollbar-hidden">
                {tracks.map((track) => (
                    console.log(track),
                    
                    <div
                        key={track.id}
                        className="min-w-[150px] h-[200px] md:min-w-[180px] md:h-[300px] snap-center hover:scale-95 transition-transform cursor-pointer"
                        >
                            
                            <img
                                src="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da"
                                className="w-[100%] h-[150px] md:h-[180px] rounded-lg object-cover"
                                alt="naj"
                            />  
                      {/*   {track.images.length > 0 ? (
                            <img
                                src={track.images[0].url}
                                alt={track.name}
                                className="w-[100%] h-[150px] md:h-[180px] rounded-lg object-cover"
                            />
                        ) : (
                            <img
                                src="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da"
                                className="w-[100%] h-[150px] md:h-[180px] rounded-lg object-cover"
                                alt="naj"
                            />
                        )}  */}
                        <p className="text-start text-[#b3b3b3] text-sm mt-2">{track.name}</p>
                        <p className="text-start text-[#b3b3b3] text-sm mt-1">
                            {track.artists.map((artist) => artist.name).join(", ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyRecamindation;
