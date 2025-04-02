import React, { useState } from "react";
import { ResizablePanel } from "../ui/resizable";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import "../../App.css"
const playlists = [
    {
        image: "https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da",
        title: "All New Indie",
        description: "Плейлист • Spotify",
    },
    {
        image: "https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da",
        title: "Chill Vibes",
        description: "Плейлист • Spotify",
    },
    {
        image: "https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da",
        title: "Top Hits",
        description: "Плейлист • Spotify",
    },
    {
        image: "https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da",
        title: "Indie Classics",
        description: "Плейлист • Spotify",
    },
];
const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true); 

    return (
        <ResizablePanel
            className="hidden w-full h-screen my-text cursor-pointer bg-[#121212] px-3 py-4 rounded-[10px] m-2 lg:block"
            defaultSize={22}
            maxSize={40}
            minSize={isOpen ? 10 : 5}
        >
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)} 
                    >
                        <TfiLayoutMediaCenterAlt size={20} />
                        <h2 className="font-[700] my-text text-[15px]">Моя медиатека</h2>
                    </div>
                    <div className="bg-[#1f1f1f] p-1 rounded-3xl">
                        <FiPlus size={20} />
                    </div>
                </div>

                <div>
                    {playlists.map((playlist, index) => (
                        <div
                            key={index}
                            className="flex items-center text-white p-2 rounded-lg mt-2 ml-[-10px] transition-all duration-100 ease-in w-full max-w-sm md:max-w-md lg:max-w-lg hover:bg-gray-800"
                        >
                            <div className="w-12 h-12 relative">
                                <img
                                    src={playlist.image}
                                    alt="Playlist Cover"
                                    className="rounded-sm"
                                />
                            </div>
                            <div className="ml-4 flex flex-col justify-center">
                                <h2 className="text-md font-normal">{playlist.title}</h2>
                                <p className="text-[13px] text-gray-400">{playlist.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ResizablePanel>
    );
};

export default Sidebar;
