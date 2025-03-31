import React from "react";
import ArtistsList from "@/components/custom/ArtistList";


interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (

        <>
            <ArtistsList />
        </>

    );
}

export default Home;