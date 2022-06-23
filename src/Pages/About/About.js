import React from 'react';
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs';

const About = () => {
    return (
       <div style= {{backgroundColor: '#021B2A'}} id= "about">
         <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", paddingTop: "220px", paddingBottom: "220px", color: "white"}}>
            <h1>This page will be launched soon!!</h1>
           <BsFillEmojiSmileUpsideDownFill style={{fontSize: "100px", color: "#9e2780"}}></BsFillEmojiSmileUpsideDownFill>
        </div>
       </div>
    );
};

export default About;