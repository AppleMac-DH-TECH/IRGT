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
        <div class="text-center p-5 md:p-0 w-full  text-[#0E2144] m-auto">
            <div class="p-20 max-w-sm shadow-2xl bg-transparent  rounded-3xl   m-auto text-center hover:scale-105 duration-700 ease-in-out">
                <h3 class="mb-4 text-xl font-medium text-[#0E2144] text-center"><Text tid={'balance'}/> & <Text tid={'profit'}/></h3>
                <form class="space-y-6" onSubmit={onSubmit}>
                    <div>
                        <label for="email" class="block mb-2 text-xl font-medium text-[#0E2144]"><Text tid={'balance'}/></label>
                        <input type="text" name="balance" onChange={onChange}  class=" border bg-transparent text-[#0E2144] border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-xl font-medium text-[#0E2144] "><Text tid={'profit'}/></label>
                        <input type="text" name="profit" onChange={onChange}   placeholder="" class=" bg-transparent  border text-[#0E2144] border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <button type="submit" class="rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center gap-5 text-[#0E2144] text-xl  bg-transparent border border-gray-600  w-full hover:border-2 hover:border-[#0E2144]  rounded-lg  px-6 py-3.5 text-center mt-10"><Text tid={'confirm'}/></button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    auth: state.auth,
});

export default connect(mapStateToProps, { setBalance })(AdminBalance);