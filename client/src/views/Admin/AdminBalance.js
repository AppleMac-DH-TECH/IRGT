import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setBalance } from '../../actions/admin/balance';
import { Text } from '../../components/languages/Text/Text';

const AdminBalance = ({ getBalance, setBalance}) => {

    const { _id } = useParams('_id')

    const [formData, setFormData] = useState({
        balance: '',
        profit: '',
        id : ''
    });

    const onChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    } 

    const onSubmit = (e) => { 
        e.preventDefault();
        formData.id = _id;
        setBalance(formData);
    }

    return (
        <div className='relative'>
            <div  class="grid place-items-center overflow-y-auto overflow-x-hidden m-auto  top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative  rounded-lg shadow bg-transparent hover:bg-[rgba(255,152,9,0.6)]">
                        <div class="py-6 px-6 lg:px-8">
                            <h3 class="mb-4 text-xl font-medium text-white text-center"><Text tid={'balance'}/> & <Text tid={'profit'}/></h3>
                            <form class="space-y-6" onSubmit={onSubmit}>
                                <div>
                                    <label for="email" class="block mb-2 text-xl font-medium text-white"><Text tid={'balance'}/></label>
                                    <input type="text" name="balance" onChange={onChange}  class=" border bg-transparent text-white border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-xl font-medium text-white "><Text tid={'profit'}/></label>
                                    <input type="text" name="profit" onChange={onChange}   placeholder="" class=" bg-transparent  border text-white border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xl font-medium rounded-lg  px-5 py-2.5 text-center "><Text tid={'confirm'}/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    auth: state.auth,
});

export default connect(mapStateToProps, { setBalance })(AdminBalance);