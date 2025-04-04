import React, { useEffect, useState } from "react";
import { ResizablePanel } from "../ui/resizable";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import "../../App.css";
import { BASE_URL } from "@/export";
import { IoMdHeart } from "react-icons/io";
import { RiPushpinFill } from "react-icons/ri";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
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
                const tracksData = data.items.map((item: any) => item.track);
                setTracks(tracksData);

            } catch (err) {
                console.error(err);
            }
        };

        getTracks();
    }, []);

    return (
        <ResizablePanel
            className="hidden w-full h-[87vh] my-text cursor-pointer bg-[#121212] px-7 py-4 pr-1 rounded-[10px] m-2 lg:block"
            defaultSize={22}
            maxSize={40}
            minSize={10}
            collapsible={isOpen}
        >
            <div className="w-full">
                <div className="flex items-center justify-between w-full mb-4">
                    <div
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        <TfiLayoutMediaCenterAlt size={20} />
                        <h2 className="font-[700] my-text text-[15px]">Моя медиатека</h2>
                    </div>
                    <div className="bg-[#1f1f1f] p-1 rounded-3xl">
                        <FiPlus size={20} />
                    </div>
                </div>

                <div className="flex space-x-4 mb-4">
                    <button className="bg-[#1f1f1f] text-white h-[30px] text-nowrap text-[12px] px-2 w-full rounded-full">Плейлисты</button>
                    <button className="bg-[#1f1f1f] text-white h-[30px] text-nowrap text-[12px] px-2 w-full rounded-full">Альбомы</button>
                    <button className="bg-[#1f1f1f] text-white h-[30px] text-nowrap text-[12px] px-2 w-full rounded-full">Подкасты и шоу</button>
                </div>

                <div>
                    <div className="flex items-center text-white p-2 rounded-lg mt-2 ml-[-10px] transition-all duration-100 ease-in w-full max-w-sm md:max-w-md lg:max-w-lg hover:bg-gray-800">
                        <div className="w-12 flex items-center justify-center h-12 rounded-[5px] bg-gradient-to-br from-indigo-500 to-purple-300">
                            <IoMdHeart size={20} />
                        </div>
                        <div className="ml-4 flex flex-col justify-center">
                            <h2 className="text-md font-normal">Любимые треки</h2>
                            <p className="text-[13px] text-gray-400 flex items-center gap-1"> <RiPushpinFill color="#1cc558" size={15} className="mb-1" />Плейлист ● {tracks.length} треков</p>
                        </div>
                    </div>
                </div>

                

            </div>
        </ResizablePanel>
    );
};

export default Sidebar;
