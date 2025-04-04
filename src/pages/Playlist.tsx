import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { BASE_URL } from "../export";
import { IoMdHeart } from "react-icons/io";

const Playlist: React.FC = () => {
    const [tracks, setTracks] = useState<any[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<string | null>(null);
    const token = localStorage.getItem("token") || "";

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch(BASE_URL + "/me/tracks", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setTracks(data.items);
            } catch (err) {
                console.error("Error fetching tracks:", err);
            }
        };

        fetchTracks();
    }, [token]);

    const formatDuration = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
    };


    return (
        <div className="bg-gradient-to-b from-[#39005a93] to-[#121212] text-white min-h-screen py-8">
            <div className="flex items-end gap-6 mb-8 px-8">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center rounded-md shadow-2xl">
                    <IoMdHeart size={70} />
                </div>
                <div>
                    <p className="text-sm uppercase tracking-wider mb-2">Плейлист</p>
                    <h1 className="text-5xl font-bold mb-4">Сохраненные треки</h1>
                    <p className="text-gray-300 mb-2">Все ваши любимые треки в одном месте</p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Spotify</span>
                        <span>•</span>
                        <span>{tracks.length} треков</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#10101056] p-8 bg-opacity-40 rounded-lg overflow-hidden">

                <div className="flex items-center gap-6 mb-8">
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-105"
                    >
                        {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                    </button>
                </div>

                <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-gray-400 text-sm">
                    <div className="col-span-1">#</div>
                    <div className="col-span-5">Название</div>
                    <div className="col-span-4">Альбом</div>
                    <div className="col-span-2 text-right">Длительность</div>
                </div>

                {tracks.map((track, index) => (
                    <div
                        key={track.track.id}
                        className={`grid grid-cols-12 gap-4 p-4 transition-all duration-300 ease-in hover:bg-gray-800 hover:bg-opacity-60 cursor-pointer rounded-2xl`}
                    >
                        <div className="col-span-1 flex items-center">

                            <span className="text-gray-400">{index + 1}</span>
                        </div>
                        <div className="col-span-5 flex gap-2">
                            <img src={track.track.album.images[0].url} alt="dlckdm" className="rounded-sm w-15 h-15" />

                            <div>  <div className="font-medium text-sm text-white">{track.track.name}</div>
                                <div className="text-sm text-gray-400">
                                    {track.track.artists.map((artist) => artist.name).join(", ")}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 text-[15px] font-semibold text-gray-400">{track.track.album.name}</div>
                        <div className="col-span-2 flex items-center justify-end gap-4">
                            <span className="text-gray-400 text-sm font-medium">{formatDuration(track.track.duration_ms)}</span>
                            <button
                                className="text-gray-400 hover:text-white"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <MdMoreVert size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Playlist;
