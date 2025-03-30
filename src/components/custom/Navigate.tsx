import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";

interface NavigateProps {

}

const Navigate: React.FC<NavigateProps> = () => {
    return (
        <>

            <div className="flex justify-between text-sm  px-3 items-center">
                <div className="flex flex-col items-center w-[80px] text-center">
                    <IoHomeOutline size={25} />
                    <p>Главная</p>
                </div>
                <div className="flex flex-col items-center  text-center" >
                    <FiSearch size={25} color="gray" />
                    <p className="text-gray-300">Поиск</p>
                </div>
                <div className="flex flex-col items-center w-[80px] text-center" >
                    <TfiLayoutMediaLeftAlt size={25} color="gray" />
                    <p className="text-gray-300">Моя медиатека</p>
                </div>
                <div className="flex flex-col items-center w-[80px] text-center" >
                    <FaSpotify size={25} color="gray" />
                    <p className="text-gray-300 text-center leading-5 break-word">Скачать  приложение</p>
                </div>
            </div>

        </>
    );
}

export default Navigate;