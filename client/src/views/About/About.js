import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text' 
import './About.css'; 

function About(props) {
    return (
        <>
           <div className="p-5 relative">
                <h1 className="text-[#0E2144] text-5xl text-center font-mono "><Text tid={"about"} /></h1>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT1'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT2'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT3'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT4'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT5'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT6'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT7'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT8'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT9'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT10'} /></p>
                <p class="  text-xl text-center text-gray-800 mt-5"><Text tid={'ABOUT11'}/></p>
            </div>
        </>
    );
}

export default About;
