import React, { useState , useEffect} from 'react';
import { Text } from '../components/languages/Text/Text';
import { Link } from 'react-router-dom';


const Lottery = () => {


    return (
        <>
        <div className='font-mono'> 
            <div className="grid grid-cols-1  text-center m-auto n-container sm:grid-col-2 md:grid-cols-4 md:margin-auto relative">

                <Link to={`/lotterySection/${1}`} className="p-5 md:p-2">  
                        <div className="  shadow-2xl bg-transparent  rounded-2xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 text-[#0E2144]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'profit'}/> : 1% </h6>
                            </div>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'min'}/> : 100$</h6>
                            </div>
                          
                        </div>
                    </Link>


                     <Link to={`/lotterySection/${1.5}`} className="p-5 md:p-2">  
                        <div className="shadow-2xl bg-transparent  rounded-2xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 text-[#0E2144]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'profit'}/>  : 1.5%</h6>
                            </div>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'min'}/> : 500$</h6>
                            </div>
                          
                        </div>
                    </Link>
                    <Link to={`/lotterySection/${2}`} className="p-5 md:p-2">  
                        <div className="shadow-2xl bg-transparent  rounded-2xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 text-[#0E2144]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'profit'}/>  : 2%</h6>
                            </div>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'min'}/> : 1000$</h6>
                            </div>
                          
                        </div>
                    </Link>

                    <Link to={`/lotterySection/${3}`} className=" p-5 md:p-2">  
                        <div className="shadow-2xl bg-transparent  rounded-2xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 text-[#0E2144]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'profit'}/>  : 3%    </h6>
                            </div>
                            <div href="#" className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                                <h6 className="mb-2 text-xl font-bold tracking-tight text-[#0E2144]"><Text tid={'min'}/> : 5000$</h6>
                            </div>
                          
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Lottery;