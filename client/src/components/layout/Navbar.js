    import React, { useState, Fragment  , useEffect} from 'react';
    import { useNavigate } from 'react-router-dom';
    import { Link , Navigate } from 'react-router-dom';
    import LanguageSelector from '../container/LanguageSelector';
    import { Text } from '../languages/Text/Text';
    import { connect } from 'react-redux';
    import PropTypes from 'prop-types';
    import { logout } from '../../actions/auth';
    const Navbar = ({ auth  ,  logout }) => {
        const [isShow, toggleModal] = useState(false);

        const logoutFunction = () => {
            logout();
        }
        const authLinks = (
            <>
            <div className="hidden w-full md:block md:w-auto relative bg-[#0E2144]" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 bg-transparent items-center rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md :font-medium md:border-0  ">
                    <Link to={'/lottery'} className="flex items-center gap-2">
                        
                        <svg class="animate-bounce w-8 h-8 ...">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </svg>    
                        <p href="#" className="block py-2 pr-4 pl-3 rounded  md:hover:text-blue-700 md:p-0  font-mono" aria-current="page" ><Text tid={'lottery'}/></p>  

                    </Link>
                    <Link to={'/transfer'}>
                        <p href="#" className="block py-2 pr-4 pl-3  text-white  rounded md:bg-transparent md:hover:text-blue-700 md:p-0  font-mono" aria-current="page"><Text  tid={'transfer'} /></p>
                    </Link>
                    <Link to={'/recharge'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  font-mono"><Text  tid={'recharge'} /></p>
                    </Link>
                    <Link to={'/withdraw'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  font-mono"><Text  tid={'withdraw'} /></p>
                    </Link>
                    <Link to={'/profit'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  font-mono"><Text  tid={'profit'} /></p>
                    </Link>
                    {<Link to={'/user'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  font-mono"><Text  tid={'user'} /></p>
                    </Link>}
                    <li>
                        <LanguageSelector />
                    </li>
                    <li>
                        <div  className=" rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center  text-white text-base  bg-transparent border border-blue  w-full  rounded-lg  px-6  text-center hover:border hover:border-blue-500">
                            <button onClick={() => { logoutFunction()}}  className="w-100 " > <Text tid={"logout"} /></button>
                        </div>
                    </li>
                </ul>
            </div>

             {/* responsive part */}
             <div className={` ${ isShow ? "" : "hidden" } bg-[#0E2144] absolute left-0 top-0 h-screen w-full z-10`}>
             <p className="none sm:hidden text-white text-right pointer m-5 mt-6" onClick={() => toggleModal(false)} >&#9776;</p>

             <div className='text-white text-center mt-12'>
                <div><Link className='mt-3' to={'/lottery'}  onClick={()=>{toggleModal(false)}} >Lottery </Link></div>
                 <div><Link className='mt-3' to={'/transfer'}  onClick={()=>{toggleModal(false)}} ><Text tid={'transfer'}/></Link></div>
                 <div><Link className='mt-3' to={'/recharge'}  onClick={()=>{toggleModal(false)}} ><Text tid={'recharge'}/></Link></div>
                 <div><Link className='mt-3' to={'/withdraw'}  onClick={()=>{toggleModal(false)}} ><Text tid={'withdraw'}/></Link></div>
                 <div><Link className='mt-3' to={'/profit'}  onClick={()=>{toggleModal(false)}} ><Text tid={'profit'}/></Link></div>
                 <div><Link className='mt-3' to={'/user'}  onClick={()=>{toggleModal(false)}} ><Text tid={'user'}/></Link></div>

             </div>

             <div className="flex justify-center gap-4 mt-10">
                 <Link to={'#'} onClick={()=>{ logoutFunction(); toggleModal(false)}} className="text-white py-2 px-2 bg-[#F4BC1D] rounded"><Text tid={'logout'}/></Link>
             </div>

             <div className='p-4 mt-2'><LanguageSelector /></div>
            </div>    
            </>        
        );

                
        const normalLink = (
            <>
                <div>
                   <h1 className='text-white text-2xl'> Not found</h1>
                </div>
            </>
        );

        const guestLinks = (
            <>
                {/* {auth.isAuthenticated?console.log(auth.user.role):console.log('')} */}
            <div className="hidden w-full md:block md:w-auto relative bg-[#0E2144]" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                    <Link to={'/profit'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:hover:text-blue-700 md:p-0  font-mono" ><Text  tid={'profit'}/></p>
                    </Link>
                    <Link to={'/about'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:hover:text-blue-700 md:p-0  font-mono"><Text  tid={'about'}/></p>
                    </Link>
                    <li>
                        <LanguageSelector />
                    </li>
                    <Link to={'/login'}>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:hover:text-blue-700 md:p-0  font-mono"><Text  tid={'signIn'}/></p>
                    </Link>
                </ul>
            </div>
            {/* responsive part */}
                <div className={`${isShow ? "" : "hidden"} bg-[#0E2144] h-auto absolute left-0 top-0  w-full z-10`} style={{paddingBottom : '25px'}}>
                <p className="none sm:hidden text-white text-right pointer m-5 mt-6" onClick={() => toggleModal(false)} >&#9776;</p>

                <div className='text-white text-center mt-12'>
                    <div><Link className='mt-3' to={'/profit'}  onClick={()=>{toggleModal(false)}} ><Text tid={'profit'}/></Link></div>
                    <div><Link className='mt-3' to={'/about'}  onClick={()=>{toggleModal(false)}} ><Text tid={'about'}/></Link></div>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <Link to={'/login/'} onClick={()=>{toggleModal(false)}} className="text-white py-2 px-2 bg-[#F4BC1D] rounded"><Text tid={'login'}/></Link>
                    <Link to={'/signup'} onClick={()=>{toggleModal(false)}} className="border border-white py-2 px-2 text-white rounded"><Text tid={'signup'}/></Link>
                </div>

                <div className='p-4 mt-2'><LanguageSelector /></div>
            </div>
            </>
        );

        const adminLink = (
            <>
            <div className="hidden w-full md:block md:w-auto relative bg-[#0E2144]" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 bg-transparent rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                    <Link to={'/userManagement'} className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <p href="#" className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent md:hover:text-blue-700 md:p-0  font-mono" ><Text tid={'user'}/></p>
                    </Link>
                    <Link to={'/notification'} className="inline-flex items-center gap">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                            <p href="#" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:hover:text-blue-700 md:p-0  font-mono">
                                <Text tid={'notificaton'} />
                            </p>
                            <span class="flex h-3 w-3 mb-3">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-xl bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                    </Link>
                    <Link to={'/adminsetting'} className="inline-flex items-center gap">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p href="#" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent  md:hover:text-blue-700 md:p-0  font-mono"><Text tid={'setting'}/></p>
                    </Link>
                    <li>
                        <LanguageSelector />
                    </li>
                    <li>
                        <div  className=" rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center  text-white text-base  bg-transparent border border-blue  w-full  rounded-lg  px-6  text-center hover:border hover:border-blue-500">
                            <button onClick={() => { logoutFunction()}}  className="w-100 " > <Text tid={"logout"} /></button>
                        </div>
                    </li>
                </ul>
            </div>

            {/* responsive part */}
            <div className={` ${ isShow ? "" : "hidden" } bg-[#0E2144] absolute left-0 top-0 h-screen w-full z-10`}>
                <p className="none sm:hidden text-white text-right pointer m-5 mt-6" onClick={() => toggleModal(false)} >&#9776;</p>

                <div className='text-white text-center mt-12'>
                    <div><Link className='mt-3' to={'/userManagement'}  onClick={()=>{toggleModal(false)}} ><Text tid={'user'}/></Link></div>
                    <div><Link className='mt-3' to={'/notification'}  onClick={()=>{toggleModal(false)}} ><Text tid={'notification'}/></Link></div>
                    <div><Link className='mt-3' to={'/adminsetting'}  onClick={()=>{toggleModal(false)}} ><Text tid={'setting'}/></Link></div>
                </div>

                <div className="flex justify-center gap-4 mt-10">
                    <Link to={'/login/'} onClick={()=>{logoutFunction(); toggleModal(false); }} className="text-white py-2 px-2 bg-[#F4BC1D] rounded"><Text tid={'logout'}/></Link>
                </div>

                <div className='p-4 mt-2'><LanguageSelector /></div>
            </div>
            </>
        )
        
        return (
            <>
                <nav className={`border-gray-200 px-2 sm:px-4 py-2.5   relative  bg-[#0E2144] `}>
                    <div className={`container flex flex-wrap justify-between items-center mx-auto`}>
                        <Link to={ (auth.isAuthenticated && auth.user.role == 'user') ? '/transfer' : (auth.isAuthenticated && auth.user.role == 'admin') ? '/userManagement' : '/' }  className="flex items-center" >
                            <img src="./img/wahedLogo.png" className="h-9 md:scale-125"/>
                            <span className="self-center text-xl font-semibold whitespace-nowrap "></span>
                        </Link>
                        <button data-collapse-toggle="navbar-default" type="button" onClick={() => toggleModal(true)} className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria4-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                        </button>
                        {(auth.isAuthenticated && auth.user.role !== "user" && auth.user.role !== 'admin') ? normalLink : ((auth.isAuthenticated && auth.user.role == "admin") ? adminLink : ( (auth.isAuthenticated && auth.user.role == "user") ? authLinks : guestLinks) )}
                    </div>
                </nav>
            </>
        )
    }

    Navbar.propTypes = {
        logout: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };
    
    const mapStateToProps = (state) => ({
        auth: state.auth,
    });
    
    export default connect(mapStateToProps, { logout })(Navbar);