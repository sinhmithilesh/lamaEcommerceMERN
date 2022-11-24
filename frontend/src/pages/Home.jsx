import React from "react";
import Navbar from "../component/Navbar"
import Announcement from "../component/Announcement"
import Slider from "../component/Slider";

const Home = () => {
    return(
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home