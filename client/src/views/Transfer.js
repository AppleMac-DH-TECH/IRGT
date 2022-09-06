import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Text } from "../components/languages/Text/Text";
import { sendNotification } from '../actions/notification';
import { getBalance } from '../actions/wallet';
import { setAlert } from '../actions/alert';

function Transfer({ sendNotification, getBalance, profile: { balance }, setAlert }) {
    
    useEffect(() => {
        getBalance();
    },[getBalance]);

    const [formData, setFormData] = useState({
        account: '',
        amount: '',
        password: '',
        method : ''
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        formData.method = 'transfer';
        if (formData.amount - balance.balance > 0) {
            setAlert("Sufficient funds");
        } else if(!formData.account){
            setAlert("Account Name is required!");
        }else if(!formData.amount){
            setAlert("Amount is required!");
        } else if(!formData.password){
            setAlert("Password is required!");
        }else { 
            sendNotification(formData);
        }
    }

    return (
        <>
           <div className="p-5 relative">
                <h1 className="text-white text-2xl text-left font-mono mt-10"><Text tid={"platformTransfer"} /></h1>
                <p className='text-white text-base text-left'><Text tid={"des"} /></p>
                <div className=" py-10">
                    <div className="">
                        <form onSubmit={onSubmit} className="max-w-[500px] w-5/6  text-white text-xl">
                            <div>
                                <p className="font-mono text-xl"><Text tid={"platformAccount"} /></p>
                                <input 
                                    type={"text"} 
                                    name="account"
                                    placeholder="Account name"
                                    onChange={onChange}
                                    className="py-3 px-3 w-full  border border-white bg-transparent mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    
                                />    
                            </div>
                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={"transferAmount"} /></p>
                                <input 
                                    type={"number"} 
                                    name="amount"
                                    placeholder="500" 
                                    onChange={onChange}
                                    className="py-3 px-3 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>

                            
                            <div className="mt-5">
                                <p className="font-mono text-xl"><Text tid={"securePassword"} /></p>
                                <input 
                                    type={"password"} 
                                    name="password"
                                    placeholder="Secure Password" 
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
const mapStateToProps = (state) => ({
    user: state.user,
    auth: state.auth,
    profile : state.profile
});

export default connect(mapStateToProps, {  sendNotification , getBalance , setAlert })(Transfer);
