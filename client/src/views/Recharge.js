import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../components/languages/Text/Text' 

function Recharge(props) {
    return (
        <>
            <div className="container grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2 relative">
                <Link to={'/usdtTransfer'} className="text-center p-10 md:p-0 text-[#0E2144] m-auto">
                    <div className="max-w-sm shadow-2xl bg-transparent  rounded-3xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                        <a href="#">
                            <img className="rounded-t-lg m-auto p-5" src="img/recharge/usdt.png" alt=""  />
                        </a>
                        <div className="p-5">
                            <a href="#">                                                                                                                                                                                                      
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0E2144] font-mono">USDT/TRC20<Text tid={'payment'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-[#0E2144] font-mono"><Text tid={'usdt'}/></p>
                        </div>
                    </div>
                </Link>

                <Link to={'/online'} className="text-center p-10 md:p-0 text-[#0E2144] m-auto">
                    <div className="max-w-sm shadow-2xl bg-transparent  rounded-3xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                        <a href="#">
                            <img className="rounded-t-lg m-auto p-5" src="img/recharge/online.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0E2144] font-mono"><Text tid={'onlinepayment'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-[#0E2144] font-mono"><Text tid={'onlinedes'}/></p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Recharge;
