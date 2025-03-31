import React, { useState } from "react";
import { ResizablePanel } from "../ui/resizable";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import "../../App.css"
import { Button } from "../ui/button";

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    return (
        <>
            <div className="hidden lg:block">
                {isOpen ? <ResizablePanel className=" w-full h-screen my-text bg-[#121212] px-3 py-4 rounded-[10px] m-2 transition-all duration-400 ease-in-out" defaultSize={22} maxSize={40} minSize={10}>

                    < div className="w-full" >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-1"><TfiLayoutMediaCenterAlt size={20} onClick={() => setIsOpen(!isOpen)} /><h2 className="font-[700]  my-text text-[15px]">Моя медиатека</h2></div>
                            <div className="bg-[#1f1f1f] p-1 rounded-3xl">
                                <FiPlus size={20} />

                            </div>
                        </div>

                        <div className="w-full bg-[#1f1f1f] rounded-[8px] py-4 px-5 my-8">
                            <p className="font-bold  my-text  text-[15px]">Создай свой первый плейлист</p>
                            <p className="font-normal   my-text text-[13px] my-2">Это совсем не сложно! Мыпоможем</p>
                            <Button className="rounded-3xl bg-white text-[#1f1f1f] h-[32px] mt-2 font-semibold">Создай плейлист</Button>

                        </div>
                        <div className="w-full bg-[#1f1f1f] rounded-[8px] py-4 px-5 my-8">
                            <p className="font-bold  my-text  text-[15px]">Подпишись на интересные подкасты</p>
                            <p className="font-normal   my-text text-[13px] my-2">Ты будешь узнавать о новых выпусках.  </p>
                            <Button className="rounded-3xl bg-white text-[#1f1f1f] h-[32px] mt-2 font-semibold">Обзор</Button>

                        </div>
                    </ div>
                </ResizablePanel >
                    :

                    <ResizablePanel className="w-[65px] h-screen my-text bg-[#121212] px-3 py-4 rounded-[10px]">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <TfiLayoutMediaCenterAlt size={25} onClick={() => setIsOpen(!isOpen)} />
                            <div className="bg-[#1f1f1f] p-1 rounded-3xl">
                                <FiPlus size={25} />

                            </div>
                        </div>
                    </ResizablePanel>
                }
            </div>
        </>
    );

}

export default Sidebar;
