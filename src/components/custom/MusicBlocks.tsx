import { BASE_URL } from "@/export";
import { useState, useEffect } from "react";


export default function MusicBlocks() {


    const [tracks, setTracks] = useState([]);

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
                const tracksData = data.items.map((item) => item.track);
                setTracks(tracksData);

            } catch (err) {
                console.error(err);
            }
        };

        getTracks();
    }, []);

    //    console.log(tracks[0].album);
    return (
        <div className="flex flex-wrap justify-start mt-3 gap-4 py-4">

            {tracks.length > 0 && (
                <>
                    <div
                        className="relative w-64 h-14 flex items-center p-2 bg-[#ffffff09] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                    >
                        <img
                            src={tracks[0].album.images[0].url}
                            alt="New Music Friday"
                            className="w-12 h-12 rounded-md object-cover"
                        />
                        <span className="ml-4 text-white text-lg font-semibold">{tracks[0].name }</span>
                    </div>

                    <div
                        className="relative w-64 h-14 flex items-center p-2 bg-[#ffffff09] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                    >
                        <img
                            src={tracks[1].album.images[0].url}
                            alt="Xcho"
                            className="w-12 h-12 rounded-md object-cover"
                        />
                        <span className="ml-4 text-white text-lg font-semibold">{tracks[1].name}</span>
                    </div>
                </>)
            }
        </div>
    );
}
