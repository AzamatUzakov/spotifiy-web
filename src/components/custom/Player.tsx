import React from "react";
import { RiHeartLine } from "react-icons/ri";

interface PlayerProps {

}

const Player: React.FC<PlayerProps> = () => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <img src="https://i.scdn.co/image/ab67616d00001e02dd359fd829521c6881c06aae" alt="Xcho" />
                        <div><h3>Моя печаль</h3> <p>Xcho, Пабло, Mr Lambo</p></div>
                    </div>
                    <div>   <RiHeartLine /></div>
                </div>
            </div>
        </>
    );
}

export default Player;