import React, { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import { sendNotification } from '../actions/notification';
import { Text } from '../components/languages/Text/Text';
import { getBalance } from '../actions/wallet';
import { setAlert } from '../actions/alert';

const Withdraw = ({ sendNotification, getBalance , profile : { balance } ,setAlert }) => {
    
    useEffect(() => {
        getBalance();

        // Image slide-show Start
        let slideIndex = 0;
        showSlides();

        function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 10000); // Change image every 2 seconds
        }
        // Image slide-show End
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
        formData.method = 'withdraw';
        console.log("balance.balance : ", balance.balance);
        if (formData.amount - balance.balance > 0) {
            setAlert("Sufficient funds");
        }else if(!formData.account){
            setAlert("Wallet address is required!");
        } else if(!formData.amount){
            setAlert("Amount is required!");
    
        } else if(!formData.password){
            setAlert("Password is required!");
        } 
        else {
            sendNotification(formData);
        }
    }


    return (
        <>
        <div className="p-5 md:pl-10 relative">
                {/*Grid section start  */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* left section start*/}
            <div >
                <h1 className="text-[#0E2144] text-3xl text-left font-mono "><Text tid={"withdraw"}/></h1>
                <div className="py-10">
                    <div className="">
                        <form onSubmit={onSubmit} className="max-w-[500px] w-full md:w-5/6  text-[#0E2144] text-xl">
                            <div>
                                <p className="font-mono text-xl"><Text  tid={'walletaddress'}/></p>
                                <input  
                                    type={"text"} 
                                    name={'account'}
                                    onChange={onChange}
                                    placeholder="Account name" 
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                    
                                />    
                            </div>
                            
                            <div className="mt-2">
                                <p className="font-mono text-xl"><Text  tid={'amount'}/></p>
                                <input 
                                    type={"number"} 
                                    placeholder="500" 
                                    name={'amount'}
                                    onChange={onChange}
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>

                            
                            <div className="mt-2">
                                <p className="font-mono text-xl"><Text tid={"securePassword"} /></p>
                                <input 
                                    type={"password"} 
                                    name={'password'}
                                    onChange={onChange}
                                    placeholder="Secure Password" 
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>


                            <button type="submit" className="rounded-bl-3xl rounded-tr-3xl text-xl  inline-flex justify-center items-center gap-5 text-[#0E2144]   bg-transparent border border-gray-600  w-full hover:border-2 hover:border-[#0E2144]  rounded-lg  px-6 py-3.5 text-center mt-10">
                                <b><Text tid={"confirm"} /> </b>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path   d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>  
                            </button>
                            
                            <h1 className='text-[#0E2144] text-2xl text-left mt-2'><Text tid={"precaution"} /></h1>
                                <ul className='list-disc p-5'>
                                    <li className='text-[#0E2144] text-base text-left' ><Text tid={"precaution1"} /></li>
                                    <li className='text-[#0E2144] text-base text-left'><Text tid={"precaution2"} /></li>
                                    <li className='text-[#0E2144] text-base text-left' ><Text tid={"precaution3"} /></li>
                                </ul>
                        </form>
                    </div>
                </div>
            </div>
            {/* left section end */}
            {/* Right section start */}
            <div className='mx-auto text-black text-2xl md:pr-5 md:p-2'>
                        <div className="slideshow-container m-auto">
                            <div className="mySlides fade">
                                <div className="numbertext">1 / 3</div>
                                <img src="./img/transfer-slide/slide1.jpg" className='rounded-3xl w-100 shadow-2xl hover:scale-105 duration-700 ease-in-out' />
                            </div>

                            <div className="mySlides fade">
                                <div className="numbertext">2 / 3</div>
                                <img src="./img/transfer-slide/slide2.jpg" className='rounded-3xl w-100 shadow-2xl hover:scale-105 duration-700 ease-in-out' />
                            </div>

                            <div className="mySlides fade">
                                <div className="numbertext">3 / 3</div>
                                <img src="./img/transfer-slide/slide3.jpg" className='rounded-3xl w-100 shadow-2xl hover:scale-105 duration-700 ease-in-out' />
                            </div> 
                        </div>
                        <div className='text-center mt-3'>
                                <span className="dot"></span> 
                                <span className="dot"></span> 
                                <span className="dot"></span> 
                        </div>
                    </div>
            {/* Right section end */}
            </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    profile : state.profile
});

export default connect(mapStateToProps, {  sendNotification  , getBalance  , setAlert})(Withdraw);

