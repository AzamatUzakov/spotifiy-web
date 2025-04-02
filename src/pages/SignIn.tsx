    import { LOGIN_URL } from "@/export";
    import { useEffect } from "react";
    import { useNavigate } from "react-router-dom";


    function SignIn() {
        const navigate = useNavigate();

        useEffect(() => {
            const params = new URLSearchParams(window.location.hash);
            const token = params.get("#access_token");

            if (token) {
                localStorage.setItem("token", token);
                navigate("/");
            }
        }, []);

        return (
            <section>
                <center>
                    <a
                        href={`${LOGIN_URL}?client_id=${import.meta.env.VITE_CLIENT_ID
                            }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI
                            }&response_type=token&scope=user-read-private user-read-email user-library-read user-library-modify 
    playlist-read-private playlist-read-collaborative playlist-modify-public 
    playlist-modify-private user-follow-read user-follow-modify 
    user-read-playback-state user-modify-playback-state user-read-currently-playing 
    user-read-recently-played user-top-read streaming`}
                    >
                        <button>login</button>
                    </a>
                </center>
            </section>)
    }

    export default SignIn;
