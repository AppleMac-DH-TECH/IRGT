import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAccounts, deleteAccount } from '../../actions/team';
import { Text } from '../../components/languages/Text/Text';


const MyTeam = ({ getAccounts, deleteAccount , account: { accounts } , auth }) => { 
    
    useEffect(() => {
        getAccounts();
    }, [getAccounts]);

    return (<>
        {/* {accounts.user} */}
       

        <div className='relative n-container' >
        <h1 className='text-center  bg-transparent text-[#0E2144] text-2xl p-5 '><Text tid={'teamlist'}/></h1>

            {accounts && accounts.map((account, index) => (    
            (auth.user._id == account.user) ?
            <div key={index}>
                <div href="#" class="flex flex-col items-center  rounded-lg m-auto w-full border hover:shadow-2xl md:flex-row mt-5">
                    <img class="object-cover w-36 h-auto rounded-t-lg md:h-auto md:w-36 md:rounded-none md:rounded-l-lg p-5" src="/img/avatar/teammember.png" alt="" />   
                    <a class="flex flex-col justify-between p-4 leading-normal">
                        <div className='inline-flex items-baseline '>
                            <label className='text-black text-2xl'><Text tid={'accountname'}/>:</label>
                            <p class="mb-2   tracking-tight text-[#0E2144] text-xl">{account.accountName}</p>
                        </div>
                        <div className='inline-flex items-baseline'> 
                            <label className='text-black text-2xl'><Text tid={'username'}/>:</label>
                            <p class="mb-3 font-normal text-[#0E2144] text-xl">{auth.user.username}</p>
                        </div>
                        <div className='inline-flex items-baseline'> 
                            <label className='text-black text-2xl'><Text tid={'jointime'}/>:</label>
                            <p class="mb-3 font-normal text-[#0E2144] text-xl">{account.date}</p>
                        </div>
                        <div class="py-4 px-6 w-full">
                                    <button onClick={() => { deleteAccount(account._id) }} class="text-[#0E2144] p-2 bg-blue-500 hover:bg-blue-700 font-mono rounded rounded-tl-lg rounded-br-lg text-2xl"><Text tid={'delete'} /></button>
                        </div>  
                    </a> 
                </div>
            </div> : ''
            ))}
        </div>
        </>
    )
}

MyTeam.propTypes = {
    account: PropTypes.object.isRequired,
    getAccounts: PropTypes.func.isRequired,
    deleteAccount : PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => ({
      account: state.team,
      auth : state.auth
  });
  
  export default connect(mapStateToProps, { getAccounts ,deleteAccount })(MyTeam);