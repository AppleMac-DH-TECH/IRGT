
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { getTeams } from '../../actions/admin/team';
import { Text } from '../../components/languages/Text/Text';

const AdminTeam = ({ getTeams , admin_team : { teams } }) => {
    const { _id } = useParams('_id')
    
    useEffect(() => {
        getTeams(_id);
    } , [])

    return (
        <>
        
        <div className='relative n-container' >
        <h1 className='text-center  bg-transparent break-words text-[#0E2144] text-2xl p-5 '><Text tid={'teamlist'}/></h1>
                {teams &&  teams._teams.map((team, index) => (
                <div key={index}>
                    <div href="#" class=" flex flex-col items-center   md:flex-row mt-5 w-full shadow-2xl bg-transparent  rounded-3xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out">
                        <img class="object-cover w-36 h-auto rounded-t-lg md:h-auto md:w-36 md:rounded-none md:rounded-l-lg p-5" src="/img/avatar/teammember.png" alt="" />   
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <div className='inline-flex items-baseline '>
                                <label className='text-black text-2xl'><Text tid={'accountname'}/>:</label>
                                <p class="mb-2   tracking-tight text-[#0E2144] text-xl">{team.accountName}</p>
                            </div>
                            <div className='inline-flex items-baseline'> 
                                <label className='text-black text-2xl'><Text tid={'username'}/>:</label>
                                <p class="mb-3 font-normal text-[#0E2144] text-xl">{teams.username}</p>
                            </div>
                            <div className='inline-flex items-baseline'> 
                                <label className='text-black text-2xl'><Text tid={'jointime'}/>:</label>
                                <p class="mb-3 font-normal text-[#0E2144] text-xl">{team.date}</p>
                            </div>
                        </div> 
                    </div>
                </div> 
            ))}
        </div>
        </>
    )
}

AdminTeam.propTypes = {
  };
  
  const mapStateToProps = (state) => ({
      admin_team : state.admin_team
  });
  
  export default connect(mapStateToProps, { getTeams })(AdminTeam);