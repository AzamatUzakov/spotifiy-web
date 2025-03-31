import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward, MdPreview } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { Input } from "../ui/input";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <div>
                <header className="flex items-center bg-black p-4 justify-between md: py-3">
                    <h1 className="font-semibold md:hidden">Добрый день</h1>

                    <div className="md:hidden">
                        <Sheet >
                            <SheetTrigger asChild><IoSettingsOutline size={25} className="cursor-pointer" /></SheetTrigger>
                            <SheetContent className="bg-black text-white border-0 p-5" >
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>

                                    <SheetDescription>
                                    </SheetDescription>
                                    <ul className="font-bold leading-9 cursor-pointer">
                                        <li className="flex items-center gap-2">Аккаунт <MdOutlineArrowOutward size={20} /></li>
                                        <li>Профиль</li>
                                        <Link to="/">    <li>Выйти</li></Link>
                                        <hr className="w-4 my-5" />
                                        <li className="text-sm leading-8">Premium</li>
                                        <li className="text-sm leading-8">Справка</li>
                                        <li className="text-sm leading-8">Скачать</li>
                                        <li className="text-sm leading-8">Конфидециальность</li>
                                        <li className="text-sm leading-8">Условия</li>
                                    </ul>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <img src="/logo.png" alt="logo" className="w-[30px] hover:opacity-80 transition-opacity" />

                        <div className="flex items-center gap-2">
                            <div className="bg-[#1f1f1f] rounded-4xl p-2 hover:bg-[#292929] transition-colors">
                                <GoHome size={25} color="white" />
                            </div>

                            <div className="flex items-center bg-[#1f1f1f] border border-[#3a3a3a] rounded-full px-4 py-1 w-full hover:border-gray-500 transition-colors">
                                <FiSearch size={25} className="text-gray-400 hover:text-white transition-colors" />
                                <Input
                                    className="bg-transparent border-0 focus:ring-0 text-white placeholder:text-gray-500 flex-grow px-3 hover:placeholder:text-gray-400 transition-colors"
                                    placeholder="Что хочешь включить?"
                                />
                                <MdPreview size={25} className="text-gray-400 hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-5">
                        <div className="flex items-center text-[#878787] font-bold text-[13px] gap-1 cursor-pointer hover:text-white transition-colors">
                            <BsArrowDownCircle size={13} className="hover:text-white transition-colors" />Устоновить приложение
                        </div>
                        <FaRegBell size={18} className="text-[#878787] hover:text-white transition-colors" />
                        <Avatar className="hover:opacity-80 transition-opacity">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>



                </header>

            </div>
        </>
    );
}

export default Header;