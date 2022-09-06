
import React, { useState} from "react";
import { Text } from "../../components/languages/Text/Text";
import { setAlert } from "../../actions/alert";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Calculation = ({ setAlert}) => {
    
    const [amount, setAmount] = useState();
    const [total, setTotal] = useState();
    const [profit, setProfit] = useState();
    const [percent, setPercent] = useState();

    const onChange = (e) => {
        if (e.target.type == "number") {
            const value = e.target.value;
            setAmount(value);
        }
        else if (e.target.type == "button") {
            const percentage = e.target.getAttribute('percent');
            if (!amount){
                setAlert("Please input amount");
            }else if (percentage == 1 && amount < 100) {
                setAlert("Minimum amount should be much than 100$");
                setTotal("");
                setPercent("");
                setProfit("");
            } else if (percentage == 1.5 && amount < 500) {
                setAlert("Minimum amount should be much than 500$");
                setTotal("");
                setPercent("");
                setProfit("");
                }else if (percentage == 2 && amount < 1000) { 
                    setAlert("Minimum amount should be much than 1000$");
                    setTotal("");
                    setPercent("");
                    setProfit("");
                }
                else if (percentage == 3 && amount < 5000) { 
                    setAlert("Minimum amount should be much than 5000$");
                    setTotal("");
                    setPercent("");
                    setProfit("");
            } else {
                const profit = (percentage / 100) * amount;
                const total = (1 + percentage / 100) * amount;
                setTotal(total);
                setPercent(percentage);
                setProfit(profit);
        
            }
            }
        }

    return (
        <>
            <div className="p-5 relative m-auto">
                <h1 className="text-white text-3xl text-left font-mono mt-10"><Text  tid={"profitCalc"}/></h1>
                <div className=" py-10">
                    <div className="">
                        <div className="max-w-[500px] w-5/6  text-white text-xl">
                            <div>
                                <p className="font-mono text-xl"><Text  tid={"investAmount"}/></p>
                                <input 
                                    type={"number"} 
                                    name={"invest"}
                                    placeholder="Investment Amount" 
                                    onChange={onChange}
                                    className="py-3 px-3 w-full  border border-white bg-transparent mt-2 rounded-bl-3xl rounded-tr-3xl" 
                                />    
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-5">
                                <div className=" ">
                                    <input type="button"
                                        className=" gap-5 text-white text-base  bg-transparent border border-white  w-full hover:border-black hover:text-xl  rounded-lg  px-6 py-3.5 text-center"
                                        name="N1"
                                        value={"100-1%"}
                                        percent = "1"
                                        onClick={onChange}
                                    />  
                                </div>

                                <div className=" ">
                                    <input type="button"
                                        className=" gap-5 text-white text-base  bg-transparent border border-white  w-full hover:border-black hover:text-xl  rounded-lg  px-6 py-3.5 text-center"
                                        name="N2"
                                        percent = "1.5"
                                        value={"500-1.5%"}
                                        onClick={onChange}
                                    />  
                                </div>

                                <div className=" ">
                                    <input type="button"
                                        className=" gap-5 text-white text-base  bg-transparent border border-white  w-full hover:border-black hover:text-xl  rounded-lg  px-6 py-3.5 text-center"
                                        name="N3-2%"
                                        percent = "2"
                                        value={"1000-2%"}
                                        onClick={onChange}
                                    />  
                                </div>

                                <div className=" ">
                                    <input type="button"
                                        className=" gap-5 text-white text-base  bg-transparent border border-white  w-full hover:border-black hover:text-xl  rounded-lg  px-6 py-3.5 text-center"
                                        name="N4"
                                        percent = "3"
                                        value={"5000-3%"}
                                        onClick={onChange}
                                    />  
                                </div>
                               
                            </div>

                            <div className="grid grid-cols-3 gap-5  mt-5 p-2">
                                    <label className=""><Text  tid={"profit"}/>:  { Math.round(profit) } $</label>
                            </div>
                            <div className="inline-flex p-2">
                                <label className=""><Text tid={"total"} /> : { Math.round(total)} $</label>
                            </div>
                            <div className="p-2">
                                <label><Text tid={"percent"} /> :  {profit && (percent + (profit && percent ? " %" : " "))} </label></div>
                            </div>
                        </div>            
                        </div>
                    </div>
        </>
    )
}


Calculation.propTypes = {
    setAlert: PropTypes.func.isRequired
  };
  

  export default connect( null , { setAlert })(Calculation);