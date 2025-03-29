import { Button } from "@/components/ui/button";
import React from "react";
import { Outlet } from "react-router-dom";

interface BaseLayout {

}

const BaseLayout: React.FC<BaseLayout> = () => {
    return (
        <>
            <header>Base Header</header>
            <main>
                <Outlet />
            </main>
            <footer>Base Footer</footer>

        </>
    );
}

export default BaseLayout;