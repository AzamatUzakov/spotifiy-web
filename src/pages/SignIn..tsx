import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = () => {
    return (

        <>
            <Link to="/me">
                <Button>Sign In</Button>
            </Link>
        </>
    );
}

export default SignIn;