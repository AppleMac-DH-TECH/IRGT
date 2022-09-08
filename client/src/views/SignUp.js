import React, { useState } from "react";
import { connect } from 'react-redux';
import {  Navigate } from 'react-router-dom';
import { useNavigate , Link } from "react-router-dom";
import { Text } from '../components/languages/Text/Text';
import PropTypes from 'prop-types';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';

const SingUp = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email :'',
        username: '',
        password: '',
        password2: '',
    });


    const { name, email , username, password, password2 } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
          setAlert('Passwords do not match');
        } else {
          register({ name, username ,  email, password });
        }
      };
    
      if (isAuthenticated) {
        return <Navigate to="/transfer" />;
      }
    
    return (
        <>
            <div className="mt-5 relative">
                {/* <img src="img/avatar/avatar.png" className="rounded-full m-auto w-36 h-36 sm:grid sm:grid-col-1" /> */}
                <h1 className="text-[#0E2144] text-4xl text-center font-mono mt-2"><Text tid={"signup"} /></h1>
                <div className=" py-10">
                    <div className="n-container">
                        <form className="max-w-[500px] w-5/6 m-auto text-[#0E2144] text-base" onSubmit={onSubmit}>
                            <div  className="">
                                <p className="font-mono text-xl"><Text tid={"fullname"} /></p>
                                <input 
                                    type={"text"} 
                                    placeholder="John Doe" 
                                    name="name"
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                   onChange = {onChange}
                                />    
                            </div>

                            <div  className="mt-2">
                                <p className="font-mono text-xl"><Text tid={"username"} /></p>
                                <input 
                                    type={"text"} 
                                    placeholder="Trader7542" 
                                    name="username"
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    onChange = {onChange}
                                />    
                            </div>

                            <div  className="mt-2">
                                <p className="font-mono text-xl"><Text tid={"email"} /></p>
                                <input 
                                    type={"email"} 
                                    placeholder="Trader7542@gmail.com" 
                                    name="email"
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    onChange = {onChange}
                                />    
                            </div>

    
      
                            <div className="mt-2">
                                <p className="font-mono text-xl"><Text tid={"password"} /></p>
                                <input 
                                    type={"password"} 
                                    name="password"
                                    placeholder="Super*****" 
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    onChange = {onChange}
                                />
                            </div>

                            <div className="mt-2">
                                <p className="font-mono text-xl"><Text tid={"confirmPassword"} /></p>
                                <input 
                                    type={"password"} 
                                    name="password2"
                                    placeholder="Super*****" 
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    onChange = {onChange}
                                />
                            </div>

                            <button  className=" rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center gap-5 text-[#0E2144] text-base  bg-transparent border border-gray-600  w-full hover:border-2 hover:border-[#0E2144] rounded-lg  px-6 py-3.5 text-center mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                <button type={'submit'}  className="w-100 text-xl" value="Register" ><strong><Text tid={"register"} /></strong></button>
                            </button>
                            <p className="text-[#0E2144] text-center mt-2"><Text tid={"alreadyAccount"}/><span className="text-[#0E2144]"> &nbsp; <Link to="/login"><strong className="font-mono text-2xl"><Text tid={"signIn"} /></strong></Link></span></p>
                        </form>
                    </div>
                </div>
            </div>     
        </>
    )
}

SingUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { setAlert, register })(SingUp);