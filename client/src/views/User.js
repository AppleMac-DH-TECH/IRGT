import React, { useEffect } from 'react';
import { Text } from '../components/languages/Text/Text'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBalance } from '../actions/wallet';
const User = ({ getBalance , profile : { balance }}) => {
    useEffect(() => {
        getBalance();
    } , [getBalance])
        return (
            <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center p-5 relative">
            
                <div className="col-span-2 ">
                    <div className="b mx-auto   flex justify-center items-center">
                        <div className="inline-flex items-center justify-center gap-5 i h-20 w-64 bg-transparent  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">                             
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none font-mono">
                                <Text tid={'balance'}/>
                            </p>
                                <strong className="text-blue-600 text-2xl font-mono"> $ {balance && balance.balance}</strong>
                        </div> 
                    </div>
                </div>
                <div className="col-span-2 ">
                    <div className="b mx-auto   flex justify-center items-center">
                        <div className="inline-flex items-center justify-center gap-5 i h-20 w-64 bg-transparent  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">                             
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none font-mono">
                                <Text tid={'profit'}/> 
                            </p>
                            <strong className="text-blue-600 text-2xl font-mono"> $ {balance && balance.profit}</strong>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 ">
                    <div className="b mx-auto   flex justify-center items-center">
                        <Link to={'/recharge'} className="inline-flex items-center justify-center gap-5 i h-20 w-64 bg-transparent  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">                             <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none">
                            <Text tid={"recharge"} /></p>
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 ">
                    <Link to={'/withdraw'} className="b mx-auto   flex justify-center items-center">
                        <div className="inline-flex items-center justify-center gap-5 i h-20 w-64 bg-transparent  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"> 
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none"><Text tid={"withdraw"}/></p>
                        </div>
                    </Link>
                </div>
                <div className="col-span-2 ">
                    <Link to={'/transfer'} className="b mx-auto   flex justify-center items-center">
                        <div className="inline-flex items-center justify-center gap-5 i h-20 w-64 bg-transparent  rounded-full shadow-2xl cursor-pointer  hover:border  hover:border-white overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"> 
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none"><Text tid={"platformTransfer"}/></p>
                        </div>
                    </Link>
                </div>
                <Link to={'/wallet'} className="col-span-2 ">
                    <div className="b mx-auto  flex justify-center items-center">
                        <div className="i h-20 w-64 inline-flex  justify-center gap-5 bg-transparent items-center  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none "><Text tid={"wallet"} /></p>
                        </div>
                    </div>
                </Link>
                <Link to={'/fundrecord'} className="col-span-2 ">
                    <div className="b mx-auto  flex justify-center items-center">
                        <div className="i inline-flex  justify-center gap-5 h-20 w-64 bg-transparent items-center  rounded-full shadow-2xl cursor-pointer  hover:border  hover:border-white overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none"><Text tid={"fundsRecord"} /></p>
                        </div>
                    </div>
                </Link>            
                <div className="col-span-2 ">
                    <Link to={'/privacy'} className="b mx-auto  flex justify-center items-center">
                        <div className="i inline-flex  justify-center gap-5 h-20 w-64 bg-transparent items-center  rounded-full shadow-2xl cursor-pointer  hover:border  hover:border-white overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none "><Text tid={"faq"} /></p>
                        </div>
                    </Link>
                </div>
                <div className="col-span-2">
                    <Link to={'/about'} className="b mx-auto  flex justify-center items-center">
                        <div className="i inline-flex  justify-center gap-5 h-20 w-64 bg-transparent items-center  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none"><Text tid={"aboutIGT"} /></p>
                        </div>
                    </Link>
                </div>
                <div className="col-span-2 row-span-2">
                    <Link to={'/team'} className="b mx-auto  flex justify-center items-center">
                        <div className="i inline-flex  justify-center gap-5 h-20 w-64 bg-transparent items-center  rounded-full shadow-2xl cursor-pointer hover:border  hover:border-white  overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                            <p className="text-center text-xl text-[#0E2144] font-semibold z-10 pointer-events-none"><Text tid={"team"} /></p>
                        </div>
                    </Link>
                </div>
                </div>
                </>
        ) }

        
        const mapStateToProps = (state) => ({
            user: state.user,
            auth: state.auth,
            profile : state.profile
        });
        
        export default connect(mapStateToProps, { getBalance })(User);