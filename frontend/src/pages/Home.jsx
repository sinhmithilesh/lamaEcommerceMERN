import React from "react";
import Navbar from "../component/Navbar"
import Announcement from "../component/Announcement"
import Slider from "../component/Slider";
import Categories from "../component/Categories";
import Products from "../component/Products";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";


const Home = () => {
    return(
        <div>
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home