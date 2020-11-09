import React from 'react'
import Vote from "../Image/Vote.jpg"
import Commom from './Commom';

const About = () => {
    return (
        <>
        <Commom 
            name='Vote !!'
            imgsrc={Vote}
            visit= "/contact"
            btname="To vote"
            alt="vote image"
            />
        </>
    );
};

export default About;