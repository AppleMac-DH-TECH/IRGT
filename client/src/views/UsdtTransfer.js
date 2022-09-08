import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../components/languages/Text/Text' 
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const array =
[
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
    "TEyLcYzm89sornBz3qKANCo75DBShw2iAM",
]


function UsdtTransfer({ setAlert }) {

    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [qrCode, setQrCode] = useState("");
    const [address, setAddress] = useState("");
    const [clip, setClip] = useState("");
    const [show, setShow] = useState(false);
    const [first, setFirst] = useState(true);

    function func(){
        var _address = array[Math.floor(Math.random() * 9)];
            setAddress(_address);
            setWord(_address);
            setQrCode
                (`http://api.qrserver.com/v1/create-qr-code/?data=${_address}!&size=${size}x${size}`);
    }
    useEffect(() => {
        if (first) {
            func();
            setFirst(false);
        }
        const interval = setInterval(func, 900000);
        
        return () => clearInterval(interval);
    }, [size]);

    function copyText() { 
        setClip(address ? address : array[0]);
        navigator.clipboard.writeText(clip);
        if (clip) { 
            setShow(!show);
            // const _interval = setInterval(setShow(!show), 2000);
            // return () => { clearInterval(_interval); }
        }
    }
    
    return (
        <>
            <div className="container  p-10 md:p-0 m-auto pt-10 pb-10 relative">
                <div className="max-w-sm shadow-2xl bg-transparent  rounded-3xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out ">
                    <div className='p-5'>
                        <img className="rounded-t-lg m-auto p-2" src={qrCode} alt=""  />
                    </div>
                    <div className="p-5">
                        <a href="#">
                        </a>
                        <div className='bg-transparent   rounded-2xl p-5'>
                            <p className="mb-3 font-normal text-[#0E2144]  text-xl font-mono"><Text tid = {'walletaddress'}/></p>
                            <p className='break-words text-[#0E2144] text-center'>{address}</p>
                            { show && <p className='text-[#0E2144] text-center text-xl font-mono'><Text tid={'copied'}/></p>}
                        </div>
                    
                        
                        <button className="inline-flex items-center m-auto py-2 px-3 text-xl  text-[#0E2144] rounded  rounded-tl-lg hover:border hover:border-black  rounded-br-lg hover:text-xl bg-transparent  border border-white "
                            onClick={ copyText }>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}   


UsdtTransfer.propTypes = {
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { setAlert })(UsdtTransfer);
