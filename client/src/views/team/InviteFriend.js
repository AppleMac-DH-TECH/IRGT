import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../components/languages/Text/Text'; 
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function InviteFriend({ setAlert }) {
    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [qrCode, setQrCode] = useState("");
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        setWord("http://world-irgt.com/login");
        setQrCode
            (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}`);
        
    }, [word, size]);
    
    function copyText() { 
        navigator.clipboard.writeText(word);
        navigator.clipboard.readText()
            .then(text => {
                if (text == word) { 
                    setShow(true);
                }
            })
    }
    
    return (
        <>
            <div className="container p-10 md:p-0 m-auto relative">
                <div className="max-w-sm shadow-2xl bg-transparent  rounded-3xl border border-gray-200  m-auto text-center hover:scale-105 duration-700 ease-in-out ">
                    <h1 className='text-[#0E2144] text-center text-2xl p-2'><Text tid={'invitationqrcode'}/></h1>
                    <a href="#">
                        <img className="rounded-t-lg m-auto p-5" src={qrCode} alt=""  />
                    </a>
                    <div className="p-5">
                        <a href="#">
                        </a>
                        <div className='bg-transparent rounded-2xl p-3'>
                            <p className="mb-3 font-normal text-[#0E2144]  text-xl font-mono"><Text tid={'invitationlink'}/></p>
                            <p className='text-base md:text-base text-[#0E2144] text-center'>{ word }</p>
                             { show && <p className='text-[#0E2144] text-center text-xl font-mono'><Text tid={'copied'}/></p> } 
                        </div>

                        {/* <div className="extra">
                                <h5><Text tid={'dimension'}/>:</h5>
                                <input type="range" min="200" max="600"
                                value={size} onChange={(e) => 
                                {setSize(e.target.value)}} />`
                        </div> */}
                        <button className="inline-flex items-center m-auto  px-3 text-xl  text-[#0E2144] rounded  rounded-tl-lg hover:border hover:border-black  rounded-br-lg hover:text-xl bg-transparent  border border-white "
                            onClick={ copyText }
                        >
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


InviteFriend.propTypes = {
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps, { setAlert })(InviteFriend);
