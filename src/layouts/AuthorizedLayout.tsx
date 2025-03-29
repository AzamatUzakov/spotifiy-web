import Header from "@/components/custom/Header";
import Navigate from "@/components/custom/Navigate";
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

            <Navigate />
        </>

    );
}

export default AuthorizedLayout;