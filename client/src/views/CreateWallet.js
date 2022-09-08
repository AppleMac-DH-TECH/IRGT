import React, { useState } from 'react';
import { Text } from '../components/languages/Text/Text';
import { addWallet } from '../actions/wallet'; 
import { Link , Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from "../actions/alert";
const CreateWallet = ({addWallet ,setAlert}) => { 

    const [formData, setFormData] = useState({
        address: '',
        password: '',
    });

    const onChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });   
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addWallet(formData);
    }



    return(
    <div className="p-5 relative ">
    <h1 className="text-[#0E2144] text-3xl text-left font-mono mt-10">Create New Wallet</h1>
    <div className=" py-10">
        <div className="">
            <form onSubmit={onSubmit} className="max-w-[500px] w-full md:w-5/6  text-[#0E2144] text-xl">
                <div>
                    <p className="font-mono text-xl">Wallet Address</p>
                    <input 
                        type={"text"} 
                        name ="address"
                        placeholder="Wallet Address" 
                        className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                        onChange={onChange}
                    />    
                </div>
                
                <div className="mt-5">
                    <p className="font-mono text-xl">Secure Password</p>
                    <input 
                        type={"password"} 
                        name="password"
                        placeholder="password" 
                        className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center gap-5 text-[#0E2144] text-xl  bg-transparent border border-gray-600  w-full hover:border-2 hover:border-[#0E2144] hover:text-2xl  rounded-lg  px-6 py-3.5 text-center mt-10">
                    <b><Text tid={"confirm"} /></b>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>  
                </button>
            </form>
        </div>
    </div>
</div>
)}

CreateWallet.propTypes = {
    addWallet: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isCreated: state.wallet.isCreated
  });
  
export default connect(mapStateToProps, { addWallet, setAlert })(CreateWallet);