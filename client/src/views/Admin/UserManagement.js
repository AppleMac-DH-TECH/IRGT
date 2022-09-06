import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate  , Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text } from '../../components/languages/Text/Text';
import { getUsers , deleteUser , getUser } from '../../actions/admin/user';
const UserManagement = ({ getUsers, deleteUser, getUser, admin_user: { admin_users } }) => {
    
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <>
        <div className='relative'>
            <h1 className='text-center text-white  m-auto text-2xl mt-10'><Text  tid={'usermanagementpart'}/></h1>
        </div>

        <div class="overflow-x-auto  relative  hover:shadow-lg container m-auto">
                
            <table class="overflow-x-auto w-full text-xl  text-white font-mono text-center hover:shadow-2xl ">
                <thead class="text-xl bg-transparent text-white uppercase ">
                    <tr>
                        <th scope="col" class="py-3 px-6 grid item-center gap-2 text-center">
                            <p><Text  tid={'username'}/></p>
                        </th>
                        
                        <th scope="col" class="py-3 px-6  text-center">
                            <p><Text  tid={'fullname'}/></p> 
                        </th>

                        <th scope="col" class="py-3 px-6  text-center">
                            <p><Text  tid={'email'}/></p> 
                        </th>
                            
                        <th scope="col" class="py-3 px-6  text-center">
                            <p><Text  tid={'password'}/></p> 
                        </th>
                            
                            
                        <th scope="col" class="py-3 px-6  text-center">
                            <p><Text  tid={'role'}/></p> 
                        </th>  
                        <th scope="col" class="py-3 px-6  text-center">
                            <p><Text  tid={'action'}/></p> 
                        </th>
                    </tr>
                </thead>
                    <tbody>
                        {admin_users.map((_user) => (
                            <tr class=" border-b bg-transparent " >
                                <td class="py-4 px-6">
                                    { _user.username }
                                </td>
                                <td class="py-4 px-6">
                                    { _user.name }
                                </td>
                                <td class="py-4 px-6">
                                    { _user.email }
                                </td>
                                <td class="py-4 px-6">
                                    { _user.password }
                                </td>
                                <td class="py-4 px-6">
                                    { _user.role }
                                </td>
                                <td class="py-4 px-6 col-spans-2  inline-flex items-center gap-2  ">
                                    <Link to={`/showUser/${_user._id}`}  onClick={() => { getUser(_user._id) }} class="text-white p-2 bg-blue-500 hover:bg-blue-700 font-mono rounded rounded-tl-2xl rounded-br-2xl"><Text tid={'view'}/></Link>
                                    <button onClick={() => {deleteUser(_user._id) }} class="text-white p-2 bg-blue-500 hover:bg-blue-700 font-mono rounded rounded-tl-2xl rounded-br-2xl"><Text  tid={'delete'}/></button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
</>
    )
}


UserManagement.propTypes = {
    getUsers: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
      admin_user : state.admin_user
  });
  
  export default connect(mapStateToProps, { getUsers , deleteUser  , getUser})(UserManagement);