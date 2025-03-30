import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Navigate from "@/components/custom/Navigate";
import Player from "@/components/custom/Player";
import { Input } from "@/components/ui/input";
import React from "react";
import { Outlet } from "react-router-dom";

interface AuthorizedLayout {

}

const AuthorizedLayout: React.FC<AuthorizedLayout> = () => {
    return (

        <>
            <Header />
            <Outlet />
            <Footer />
            <div className="fixed bottom-0 left-0 w-full bg-black py-2">
                {/* <Player /> */}

                <Navigate />

            </div>
        </>

    );
}

export default AuthorizedLayout;