import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../components/languages/Text/Text' 

function Recharge(props) {
    return (
        <>
            <div className="container grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2 relative">
                <div className="max-w-sm bg-transparent rounded-lg  shadow-md m-auto text-center hover:shadow-2xl  hover:scale-105 hover:bg-[rgba(255,152,9,0.6)]">
                    <a href="#">
                        <img className="rounded-t-lg m-auto p-5" src="img/recharge/usdt.png" alt=""  />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono">USDT/TRC20<Text tid={'payment'}/></h5>
                        </a>
                        <p className="mb-3 font-normal text-white font-mono"><Text tid={'usdt'}/></p>
                        <Link to={'/usdtTransfer'}>
                            <button href="#" className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-lg hover:border hover:border-black  rounded-br-lg hover:text-xl bg-transparent  border border-white  ">
                                <Text tid={'letzgo'}/>
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="text-center text-white   m-auto">
                    <div className="max-w-sm bg-transparent   shadow-md hover:shadow-2xl  hover:scale-105 hover:bg-[rgba(255,152,9,0.6)]">
                        <a href="#">
                            <img className="rounded-t-lg m-auto p-5" src="img/recharge/online.png" alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono"><Text tid={'onlinepayment'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white font-mono"><Text tid={'onlinedes'}/></p>
                            <Link to={'/online'}>
                                <button href="#" className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-tl-lg rounded  hover:text-xl  hover:border hover:border-black   rounded-br-lg bg-transparent border border-white  ">
                                    <Text tid={'letzgo'}/>
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recharge;
