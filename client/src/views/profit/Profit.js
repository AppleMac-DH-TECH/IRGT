import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components/languages/Text/Text";
import './profit.css';

const Profit = () => {
    
    return (
        <>
            <div className="container grid grid-cols-1 gap-4 m-auto md:grid md:grid-cols-2 relative p-4 ">
                <div className="max-w-sm shadow-2xl bg-transparent rounded-lg border border-gray-200  m-auto text-center hover:scale-105">
                    <a href="#">
                        <img className="object-fill h-72 w-64 m-auto p-2 " src="img/profit/slide-new-1.png" alt=""  />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono"><Text tid={'profitcalculation'}/></h5>
                        </a>
                        <p className="mb-3 font-normal text-white font-mono"><Text tid={'profitdes'}/></p>
                        <Link to={'/calculation'}>
                            <button href="#" className=" inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded  rounded-tl-2xl  rounded-br-2xl  hover:border hover:border-black bg-transparent  border border-white  ">
                                <Text tid={'calculation'}/>
                                <svg aria-hidden="t rue" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="text-center text-white shadow-2xl  m-auto hover:scale-105">
                    <div className="max-w-sm bg-transparent  border border-gray-200 shadow-md p-4">
                        <a href="#">
                            <img className="object-scale-down h-72 w-64 m-auto p-2" src="img/profit/slide-new-3.png" alt="" />
                        </a>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white font-mono"><Text tid={'learnmore'}/></h5>
                            <p className="mb-3 font-normal text-white font-mono"><Text tid={'learndes'}/></p>
                            <Link to="/learnmore" className="inline-flex items-center py-2 px-3 text-base font-medium text-center text-white rounded-tl-2xl  rounded    hover:border hover:border-black    rounded-br-2xl    bg-transparent border border-white  ">
                                <Text tid={'more'}/>
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profit;