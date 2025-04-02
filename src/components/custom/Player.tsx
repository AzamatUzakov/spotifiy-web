import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaPlay, FaPause } from "react-icons/fa6";

interface PlayerProps { }

const Player: React.FC<PlayerProps> = () => {
    const [player, setPlayer] = useState(false);

    const togglePlay = () => {
        setPlayer(!player);
    };

    return (
        <div className="left-0 w-full h-14 relative z-30  bg-[rgb(8,32,64)] px-4 flex items-center justify-between text-white mb-0 md:px-6">
            <div className="flex items-center gap-4 w-1/3">
                <img src="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da" alt="song-cover" className="w-9 h-9 rounded-md object-cover" />
                <div className="flex flex-col">
                    <h5 className="text-sm font-semibold">Bille</h5>
                    <p className="text-xs text-gray-400">I can fly</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <FaRegHeart size={24} className="" />
                <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                >
                    {player ? <FaPause size={24} /> : <FaPlay size={24} />}
                </button>
            </div>

            <div className="hidden md:flex w-1/3 justify-end text-gray-400 text-sm">
                0:00 / 3:45
            </div>
        </div>
    );
};

export default Player;
