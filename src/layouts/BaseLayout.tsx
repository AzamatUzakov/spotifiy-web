import { Button } from "@/components/ui/button";
import React, { createContext } from "react";
import { Link, Outlet } from "react-router-dom";

interface BaseLayout {

}
export const tokenCTX  = createContext<string>("");

const BaseLayout: React.FC<BaseLayout> = () => {
    const token: string = localStorage.getItem("token") || " ";
console.log(token); 

    return (
        <tokenCTX.Provider value={token}>
            
                    <Outlet />
            
        </tokenCTX.Provider>
    );
}

export default BaseLayout;