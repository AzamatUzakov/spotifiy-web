export default function MusicBlocks() {
    return (
        <div className="flex flex-wrap justify-start mt-3 gap-4 py-4">
            <div
                className="relative w-64 h-14 flex items-center p-2 bg-[#ffffff09] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
                <img
                    src="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da"
                    alt="New Music Friday"
                    className="w-12 h-12 rounded-md object-cover"
                />
                <span className="ml-4 text-white text-lg font-semibold">New Music Friday</span>
            </div>

            <div
                className="relative w-64 h-14 flex items-center p-2 bg-[#ffffff09] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
                <img
                    src="https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da"
                    alt="Xcho"
                    className="w-12 h-12 rounded-md object-cover"
                />
                <span className="ml-4 text-white text-lg font-semibold">Xcho</span>
            </div>
        </div>
    );
}
