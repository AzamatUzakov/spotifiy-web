import React, { useContext, useEffect } from "react";
import ArtistsList from "@/components/custom/ArtistList";
import { tokenCTX } from "@/layouts/BaseLayout";
import { BASE_URL } from "@/export";
import ToggleButtons from "@/components/custom/ToggleButtons";
import MusicBlocks from "@/components/custom/MusicBlocks";
import MyRecamindation from "@/components/custom/MyRecamindation";
import MyAlbum from "@/components/custom/MyAlbum";


interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    //const token = useContext(tokenCTX);
  
    return (

        <>
            <ToggleButtons />
            <MusicBlocks/>
            <ArtistsList />
            <MyRecamindation />
            <MyAlbum/>
        </>

    );
}

export default Home;