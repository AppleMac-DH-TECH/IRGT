import React , { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUser } from '../../actions/admin/user';
import { connect } from 'react-redux';
import { Text } from '../../components/languages/Text/Text';
import PropTypes from 'prop-types';
const ShowUser = ({  }) => { 
    const { _id } = useParams('_id')
    useEffect(() => {
    })
    return (
        <>
            <div className='font-mono' > 
            <div className="grid grid-cols-1 gap-4 text-center m-auto n-container sm:grid-col-2 md:grid-cols-4 md:margin-auto relative">

                <Link to={`/showUser/${_id}/balance`}  className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'balance'}/> & <Text tid={'profit'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'balanceandprofit'}/></p>
                          
                        </div>
                    </Link>


                    <Link to={`/showUser/${_id}/record`}   className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'fundrecord'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'fundrecord'}/></p>
                          
                        </div>
                    </Link>

                    <Link to={`/showUser/${_id}/team`}  className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'team'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'teaminfo'}/></p>

                        </div>
                    </Link>

                    <Link to={`/showUser/${_id}/wallet`} className="max-w-sm  rounded-lg border border-gray-200 shadow-md hover:shadow-2xl  hover:scale-125 hover:bg-[rgba(255,152,9,0.6)]">  
                        <div className="p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-15" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
                            </svg>
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white"><Text tid={'wallet'}/></h5>
                            </a>
                            <p className="mb-3 font-normal text-white"><Text tid={'wallet'}/></p>
                          
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}


  const mapStateToProps = (state) => ({
  });
  
  export default connect(mapStateToProps, {   getUser})(ShowUser);