import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link , Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import { setAlert } from "../actions/alert";
import { Text } from '../components/languages/Text/Text';
const Login = ({ login  ,auth, setAlert}) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const {username, password } = formData;

    const onChange = (e) => { 
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login(username, password);
      };

    if (auth.isAuthenticated && auth.user.role == 'admin') {
        return <Navigate to="/userManagement" />;
    } else if (auth.isAuthenticated && auth.user.role == 'user') { 
        return <Navigate to="/transfer" />;
    }


    return (
        <>
            <div className="mt-5 relative">
                {/* <img src="img/avatar/avatar.png" className="rounded-full m-auto w-360 h-36 sm:grid sm:grid-col-1" /> */}
                <h1 className="text-white text-4xl text-center font-mono mt-5"><Text tid={"signIn"} /></h1>
                <div className=" py-10">
                    <div className="n-container">
                        <form className="max-w-[500px] w-5/6 m-auto text-white text-xl" onSubmit={onSubmit}>
                            <div>
                                <p className="font-mono text-xl"><Text tid={"username"}/></p>
                                <input 
                                    type={"text"} 
                                    placeholder="Trader75446"
                                    name="username"
                                    className="py-3 px-3 w-full  bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    onChange={onChange}
                                />    
                            </div>
                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={"password"}/></p>
                                <input 
                                    type={"password"} 
                                    placeholder="john******" 
                                    name="password"
                                    
                                    className="py-3 px-3 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    onChange={onChange}
                                />
                            </div>

                             <div  className=" rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center gap-5 text-white text-base  bg-transparent border border-white  w-full hover:border-black hover:text-2xl  rounded-lg  px-6 py-3.5 text-center mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                                <button type={'submit'} className="text-xl" > <Text tid={"login"} /></button>
                            </div>

                            <p className="text-white text-center mt-5"><Text tid={"donotaccount"}/> &nbsp; <span className="text-[#F4BC1D]"><Link to="/signup"><strong className="font-mono text-2xl"><Text tid={"signup"} /></strong></Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
      auth: state.auth
  });
  
export default connect(mapStateToProps, { login, setAlert  })(Login);