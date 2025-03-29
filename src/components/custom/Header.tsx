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
import { MdOutlineArrowOutward } from "react-icons/md";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
            <div>
                <header className="flex items-center p-3 justify-between">
                    <h1 className="font-semibold">Добрый день</h1>

                    <div className="">
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
                                        <hr className="w-4 my-5"/>
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

                </header>

            </div>
        </>
    );
}

export default Header;