import React , { useEffect, useState } from 'react';
import { Link, useParams  , useNavigate} from 'react-router-dom';
import { getBalance } from '../actions/wallet';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { Navigate } from 'react-router-dom';
import { GetTimer, AddTimer, DelTimer } from '../actions/timer';
import { Text } from '../components/languages/Text/Text';


const LotterySection = ({ setAlert, getBalance, profile: { balance }, timer,GetTimer,AddTimer, DelTimer }) => { 
    const navigate = useNavigate();
    const { _profit } = useParams('_profit');
    const [day, setDay] = useState(0);
    const [currentTime, setTime] = useState('03:00:00');
    const [text, setText] = useState("");

    const timeTicket = (oldTime) => {

        if (oldTime == "02:59:50") {
            text ? setAlert(`The Number you typed is sent ${text}`) : setAlert("Nothing sent");
            DelTimer(_profit);
            return;
        }
        let h, m, s;
        h = Number(oldTime.split(':')[0]);
        m = Number(oldTime.split(':')[1]);
        s = Number(oldTime.split(':')[2]);
        if (s > 0) s--;
        else {
            s = 59; 
            if (m > 0) m--;
            else {
                m = 59;
                h--;

            }
        }       
        let timeData = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);        
        return timeData;
    }

    useEffect(() => {
        if (timer != "Empty") {
            let k = 3 * 3600 - timer;
            let h, m, s;
            h = Math.floor(k / 3600);
            m = Math.floor(k % 3600 / 60);
            s = k % 60;
            let timeData = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);        
            setTime(timeData);
        
        const interval = setInterval(() => {
            // timeTicket(currentTime);
            // setDay(day => day + 1);
            
      
                setTime(currentTime => timeTicket(currentTime));
            
          }, 1000);
            return () => clearInterval(interval);
        }
    },[timer])
    useEffect(() => {       
        GetTimer(_profit);
        getBalance();
        if (_profit == 1 && balance.balance < 100) {
            setAlert("You should have got minium 100$");
            navigate('/lottery');
        } else if (_profit == 1.5 && balance.balance < 500) { 
            setAlert("You should have got minium 500$");
            navigate('/lottery');
        }else if (_profit == 2 && balance.balance < 1000) { 
            setAlert("You should have got minium 1000$");
            navigate('/lottery');
        }else if (_profit == 3 && balance.balance < 5000) { 
            setAlert("You should have got minium 5000$");
            navigate('/lottery');
        }
      
    },[getBalance]);


    const sendSubmit = (e) => {
        
        if (timer == "Empty") {
            setAlert("No Timer");
            e.preventDefault();
            return;
        }
        else if(text.length == 6)                            
            DelTimer(_profit);
            
        else {
            e.preventDefault();
            setAlert("You should put 6 numbers");
        }
        
    }
    

    return (
    <>
            <div className='relative'>
                
                
            {/* Start Button */}
                { timer == "Empty"?<button onClick={() => { AddTimer(_profit)}} className="b animate-pulse mx-auto h-16 w-64  flex justify-center items-center rounded-full">
                <div class="i h-16 w-64 bg-[#0E2144] items-center rounded-2xl shadow-2xl cursor-pointer text-[#0E2144] absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out sm:w-64">
                </div>
                <a class="text-center text-white font-semibold z-10 pointer-events-none"><Text tid={'letsgetstart'}/></a>
                </button>
                    :''}
        
                {/* Time Countdown  */}
                {timer != "Empty" && (<h1 className='text-center text-[#0E2144] text-5xl mt-5 font-mono'>{currentTime}</h1>)}
                
                <form className="max-w-[500px] w-5/6  text-[#0E2144] text-xl m-auto" onSubmit={sendSubmit}>
                            <div className="mt-5">
                                <p className="font-mono text-xl text-center"><Text tid={'chooseNumber'}/></p>
                                <input 
                                    type={"text"}
                            value={text}
                            onChange={(e) => {
                                if(e.target.value.length<=6)
                                    setText(e.target.value);
                            }}
                                    name="number"
                                    placeholder="" 
                                    className="py-3 px-3 w-full border-gray-600 hover:border hover:border-[#0E2144] bg-transparent border  mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />
                            </div>
                            <button type="submit" className="rounded-bl-3xl rounded-tr-3xl  inline-flex justify-center items-center gap-5 text-[#0E2144] text-xl  bg-transparent border border-gray-600  w-full hover:border-2 hover:border-[#0E2144]   rounded-lg  px-6 py-3.5 text-center mt-10">
                                <b><Text tid={"confirm"} /></b>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>  
                            </button>
                        </form>
            </div>
            
    </>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    timer: state.timer.currentTime,
});

export default connect(mapStateToProps, {  setAlert ,  getBalance, GetTimer, AddTimer , DelTimer })(LotterySection);