import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text';
import { addTeamAccount } from '../../actions/team';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const  AddAccount = ({ addTeamAccount  ,setAlert}) => {

    const [formData, setFormData] = useState({
        accountName: "",
        password: "",
        password2: ""
    });

    const { accountName, password, password2 } = formData;
    const onChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        if (password != password2) {
            setAlert("Password does not Match!");
        } else {
            addTeamAccount(formData);
         }
    }

    return (
        <>
           <div className="p-5 relative m-auto ">
                <h1 className="text-white text-3xl text-left font-mono mt-10"><Text tid={'createaccount'}/></h1>
                <p className='text-white text-xl text-left'><Text tid={'addaccountdes'}/></p>
                <div className=" py-10">
                    <div className="">
                        <form onSubmit={onSubmit} className="max-w-[500px] w-5/6  text-white text-xl">
                            <div>
                                <p className="font-mono text-xl"><Text tid={'accountname'}/></p>
                                <input 
                                    type={"text"} 
                                    placeholder="Account name" 
                                    name='accountName'
                                    onChange={onChange}
                                    className="py-3 px-3 w-full  border border-white bg-transparent mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />    
                            </div>
                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={'password'}/></p>
                                <input 
                                    type={"password"} 
                                    name="password"
                                    placeholder="password" 
                                    onChange={onChange}
                                    className="py-3 px-3 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>

                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={'confirmPassword'}/></p>
                                <input 
                                    type={"password"} 
                                    placeholder="Confirm Password" 
                                    name='password2'
                                    onChange={onChange}
                                    className="py-3 px-3 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    
                                />
                            </div>
                            <button type="submit" className="rounded-bl-3xl rounded-tr-3xl mt-5 inline-flex justify-center items-center gap-5 text-white text-xl  bg-transparent border border-white  w-full hover:border-black hover:text-2xl  rounded-lg  px-6 py-3.5 text-center">
                                <b><Text tid={"confirm"} /></b>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>  
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

AddAccount.propTypes = {
    addTeamAccount: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({

  });
  
export default connect(mapStateToProps, { addTeamAccount , setAlert })(AddAccount);
