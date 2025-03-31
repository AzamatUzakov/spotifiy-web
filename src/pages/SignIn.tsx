import { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = "7c0196fa2ba548d1b9fab54a1dafb0b1";
const CLIENT_SECRET = "9cace91b53f149408a76a9062bbd657c";
const TOKEN_URL = "https://accounts.spotify.com/api/token";

function LoginPage() {
    const [token, setToken] = useState(localStorage.getItem("spotify_token") || null);
    const navigate = useNavigate();

    async function fetchToken() {

        try {
            const response = await fetch(TOKEN_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    grant_type: "client_credentials",
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                }),
            });
            

            const data = await response.json();
            console.log("API Response:", data);
            console.log(response, "jj");

            if (data.access_token) {
                const expiresIn = data.expires_in * 1000;
                const expiryTime = Date.now() + expiresIn;

                setToken(data.access_token);
                localStorage.setItem("spotify_token", data.access_token);
                localStorage.setItem("spotify_token_expiry", expiryTime.toString());

                return data.access_token;
            } else {
                console.error("Ошибка получения токена:", data);
                return null;
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            return null;
        }
    }

    async function handleLogin() {
        const storedToken = localStorage.getItem("spotify_token");
        const tokenExpiry = localStorage.getItem("spotify_token_expiry");

        if (storedToken && tokenExpiry && Date.now() < Number(tokenExpiry)) {
            setToken(storedToken);
            navigate("/me");
        } else {
            console.log("Токен устарел");
            const newToken = await fetchToken();
            if (newToken) {
                navigate("/me");
            } else {
                alert("Ошибка");
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Вход в Spotify</h1>
            <button
                onClick={handleLogin}
                className="bg-green-500 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600 flex items-center gap-2"
            >
                <FaSpotify size={20} />
                Войти
            </button>
        </div>
    );
}

export default LoginPage;
