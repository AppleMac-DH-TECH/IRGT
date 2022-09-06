import React , {useState} from 'react'
import {Text} from '../../components/languages/Text/Text';
import { connect } from 'react-redux';
import {adminSetting} from '../../actions/auth';
import {setAlert} from '../../actions/alert';
const AdminSetting  =({adminSetting , setAlert})=> {

    const [formData , setFormData] = useState({
        oldPassword : '',
        newPassword : '',
        confirmPassword : ''
    });

    const onChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value});
    }

    const onSubmit = (e)  => {
        e.preventDefault();
        // console.log(formData);
        if(formData.newPassword.length < 6){
            setAlert("Password should be between 6 to 30 characters");
        }
        adminSetting(formData);
    }


    return(
        // Admin password  Start Section
        <div className="p-5 relative">
        <h1 className="text-white text-2xl text-left font-mono mt-10"><Text tid={'changeAdminPassword'}/></h1>
        <div className=" py-10">
            <div className="">
                <form onSubmit={onSubmit} className="max-w-[500px] w-5/6  text-white text-xl">
                    <div>
                        <p className="font-mono text-xl"><Text tid={'oldPassword'}/></p>
                        <input
                            type={"text"} 
                            name="oldPassword"
                            placeholder="Old Password"
                            onChange={onChange}
                            className="py-3 px-3 w-full  border border-white bg-transparent mt-2 rounded-bl-3xl rounded-tr-3xl" 
                            
                        />    
                    </div>
                    
                    <div className="mt-5">
                        <p className="font-mono text-xl"><Text tid={'newPassword'}/></p>
                        <input 
                            type={"password"} 
                            name="newPassword"
                            placeholder="New Password" 
                            onChange={onChange}
                            className="py-3 px-3 w-full bg-transparent border border-white mt-2 rounded-bl-3xl rounded-tr-3xl" 
                        />
                    </div>

                    
                    <div className="mt-5">
                        <p className="font-mono text-xl"><Text tid={'confirmPassword'}/></p>
                        <input 
                            type={"password"} 
                            name="confirmPassword"
                            placeholder="Confirm Password" 
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
        // Admin password Ending Section
    )    
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {  adminSetting  , setAlert })(AdminSetting);