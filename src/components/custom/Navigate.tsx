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

            <div className="flex justify-between text-sm  px-3">
                <div className="flex flex-col items-center">
                    <IoHomeOutline  size={25}/>
                    <p>Главная</p>
                </div>
                <div className="flex flex-col items-center" >
                    <FiSearch size={25} color="gray"/>
                    <p className="text-gray-300">Поиск</p>
                </div>
                <div className="flex flex-col items-center" >
                    <TfiLayoutMediaLeftAlt size={25} color="gray" />
                    <p className="text-gray-50">Моя медиатека</p>
                </div>
                <div className="flex flex-col items-center" >
                    <FaSpotify size={25} color="gray" />
                    <p className="text-gray-50 text-center leading-5">Скачать <br /> приложение</p>
                </div>
            </div>

        </>
    );
}

export default Navigate;