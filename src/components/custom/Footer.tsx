import React from "react";
import "../../App.css"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <>
            <footer className="p-4 pb-30">

                <div>
                    <h3 className="my-text mt-9 mb-3 font-bold text-[16px] ">Компания</h3>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">О нас</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Вакансии</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">For the Record</a>
                </div>

                <div>
                    <h3 className="my-text mt-9 mb-3 font-bold text-[16px] ">Сообщеста</h3>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Для исполнителей</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Для разработчиков</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Реклама</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Для инвесторов</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Для вендоров</a>
                </div>
                <div>
                    <h3 className="my-text mt-9 mb-3 font-bold text-[16px] ">Полезные ссылки</h3>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Справка</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Бесплатное  мобильное приложение</a>
                </div>

                <div>
                    <h3 className="my-text mt-9 mb-3 font-bold text-[16px] ">План Spotify</h3>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Индивидуальная подписка Spotify Premium</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Premium для двоих</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Premium для семьи</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Premium для студентов</a>
                    <a href="#" className="my-text block font-normal text-[14px] mb-1.5 ml-2 text-[#9e928f]">Бесплатная версия Spotify</a>
                </div>
                <div className="flex  gap-3 my-8">
                    <div className="w-[40px] h-[40px] bg-[#292929] flex items-center justify-center rounded-3xl"><FaInstagram size={20} /></div>
                    <div className="w-[40px] h-[40px] bg-[#292929] flex items-center justify-center rounded-3xl"><IoLogoTwitter size={20} /></div>
                    <div className="w-[40px] h-[40px] bg-[#292929] flex items-center justify-center rounded-3xl"><FaFacebook size={20} /></div>
                </div>
                <hr className="border-0 h-[1px] bg-[#292929]" />
                <div className="flex flex-wrap gap-3.5 mt-8">
                    <div className="flex flex-wrap gap-x-3">
                        <p className="my-text text-[#9e928f] text-sm leading-7">Юридическая информация</p>
                        <p className="my-text text-[#9e928f] text-sm leading-7">Центр безопасности и конфиденциальности</p>
                        <p className="my-text text-[#9e928f] text-sm leading-7">Политика конфиденциальности</p>
                        <p className="my-text text-[#9e928f] text-sm leading-7">Файлы cookie</p>
                        <p className="my-text text-[#9e928f] text-sm leading-7">О рекламе</p>
                        <p className="my-text text-[#9e928f] text-sm leading-7">Специальные возможности</p>
                    </div>
                    <a className="my-text text-[#9e928f] text-sm " href="#">© 2025 Spotify AB</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;