import React from 'react'
import homeimg from "./Image/welcome.png"
import Commom from './Commom'

const Home = () => {
    return (
        <>
        <Commom 
            name='Welcome !!'
            imgsrc={homeimg}
            visit= "/about"
            btname="Get Start"
            alt="home image"
        />
        </>
    );
};

export default Home;