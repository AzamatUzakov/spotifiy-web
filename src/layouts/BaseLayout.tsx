import { Button } from "@/components/ui/button";
import React from "react";
import { Outlet } from "react-router-dom";

interface BaseLayout {

}

const BaseLayout: React.FC<BaseLayout> = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>

        </>
    );
}

export default BaseLayout;