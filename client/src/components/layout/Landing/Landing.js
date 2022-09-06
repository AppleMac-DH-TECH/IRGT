import React, { useState } from 'react';
import './Landing.scss';
import { Link } from 'react-router-dom';
import Title from '../../common/title/Title';
// import StakingProviders from '../components/section/Providers';

function Landing(props) {

    return (
            <div className="title-container text-white text-4xl mt-20">
            <div className="title-mask">
                    <h1 className="title-content md : text-2xl">
                        <span className="title-highlight">We are always </span> Providing<br /><br />
                        The most CONVENIENT WAY  <br /><br />
                        <span className="title-highlight">To transfer FUNDS</span><br />
                    </h1>
            </div>
            
            <Link  to={"/Login"} >
                <button className=" block  w-3/4 text-center mx-auto cursor-pointer pt-10 btn-text" >
                    <div className="b mx-auto h-16 w-64 flex justify-center items-center">
                    <div className="i h-16 w-64 bg-gradient-to-br from-red-400 to-blue-400 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                    </div>
                        <p className="text-center text-white text-2xl  z-10 pointer-events-none font-mono ">Get Started</p>
                    </div>
                </button>
            </Link>
            </div>
    );
}

export default Landing;
