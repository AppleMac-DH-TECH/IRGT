import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../components/languages/Text/Text';
const Team = () => { 
    return (
        <div className='font-mono'> 
            <div className="grid grid-cols-1 gap-4 text-center m-auto n-container sm:grid-col-2 md:grid-cols-3 md:margin-auto relative">

                <Link to={'/myTeam'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'myteam'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'teammember'}/></p>
                          
                        </div>
                    </Link>


                     <Link to={'/addAccount'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'createaccount'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'createnewaccount'}/></p>
                          
                        </div>
                    </Link>
                    <Link to={'/inviteFriend'} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'invitefriend'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'invitefriends'}/></p>
                          
                        </div>
                    </Link>
                </div>
            </div>
    )
}

export default Team;