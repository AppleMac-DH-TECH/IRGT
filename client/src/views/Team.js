import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../components/languages/Text/Text';
const Team = () => { 
    return (
        <div className='font-mono'> 
            <div className="grid grid-cols-1 gap-4 text-center m-auto n-container sm:grid-col-2 md:grid-cols-3 md:margin-auto relative">

                    <Link to={'/myTeam'} className="text-center p-5 md:p-0 w-full  text-[#0E2144] m-auto">  
                        <div className="p-20 max-w-sm shadow-2xl bg-transparent  rounded-3xl   m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                            <h5 className="mb-2 text-2xl font-bold  text-[#0E2144]"><Text tid={'myteam'}/></h5>
                            <p className="mb-3 font-normal text-[#0E2144]"><Text tid={'teammember'}/></p>
                          
                        </div>
                    </Link>

                     <Link to={'/addAccount'} className="text-center p-5 md:p-0 w-full text-[#0E2144] m-auto">  
                        <div className="p-20 max-w-sm shadow-2xl bg-transparent  rounded-3xl   m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15 m-auto" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                            <h5 className="mb-2 text-2xl font-bold  text-[#0E2144]"><Text tid={'createaccount'}/></h5>
                            <p className="mb-3 font-normal text-[#0E2144]"><Text tid={'createnewaccount'}/></p>
                          
                        </div>
                    </Link>
                    <Link to={'/inviteFriend'} className="text-center p-5 md:p-0 w-full text-[#0E2144] m-auto">  
                        <div className="p-20 max-w-sm shadow-2xl bg-transparent  rounded-3xl   m-auto text-center hover:scale-105 duration-700 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold  text-[#0E2144]"><Text tid={'invitefriend'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-[#0E2144]"><Text tid={'invitefriends'}/></p>
                          
                        </div>
                    </Link>
                </div>
            </div>
    )
}

export default Team;