import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Navigate from "@/components/custom/Navigate";

import { ResizablePanelGroup, ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/custom/Sidebar";
import Player from "@/components/custom/Player";

interface AuthorizedLayout {

}

const AuthorizedLayout: React.FC<AuthorizedLayout> = () => {
    return (

        <div className="">
            <Header />


            <ResizablePanelGroup direction="horizontal" className="bg-black flex gap-3" >
                <Sidebar />
                <ResizableHandle className="hidden lg:flex" />
                <ResizablePanel className="flex-1 min-h-0 overflow-y-scroll bg-[#121212] rounded-[10px] mt-2">
                    <Outlet />
                    <Footer />

                </ResizablePanel>
            </ResizablePanelGroup>


            <div className="fixed bottom-0 left-0 w-full bg-black py-2 md:py-0">
                {/* <Player /> */}
                <Player />
                <Navigate />

            </div>


        </div>

    );
}

export default AuthorizedLayout;