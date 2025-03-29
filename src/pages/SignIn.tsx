import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = () => {
    return (

        <div className="w-full relative">
            <Link to="/me">
                <Button className="bg-green-500 hover:bg-green-600 text-black font-bold py-5 px-10 rounded-full shadow-md transition-all absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2">
                    Sign In
                </Button>
            </Link>
        </div>
    );
}

export default SignIn;