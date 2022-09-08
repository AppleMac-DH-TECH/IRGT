import  React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWallet } from '../actions/wallet';
import { deleteWallet } from '../actions/wallet';
import { Text } from '../components/languages/Text/Text';
const Wallet = ({ getWallet, deleteWallet, wallet: { wallet} , auth }) => { 

    useEffect(() => {
        getWallet();
    }, [getWallet]);

    return (
        <div className='container w-screen  md:w-2/3 p-5 md:p-0 m-auto pt-10 pb-10 relative '> 
            {!wallet && (<Link to={'/createWallet'} className="rounded-full  inline-flex justify-center items-center gap-5 text-[#0E2144] text-xl  bg-transparent border border-gray-600  w-full hover:border-[#0E2144]   px-4 py-3.5 text-center">
                    <b>Add New Wallet</b>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
            </Link>)}


            <div class="overflow-x-auto rounded-full md:rounded-3xl overflow-auto relative shadow-md  m-auto text-xl mt-10">
                <div className="container overflow-x-auto  shadow-2xl bg-transparent  m-auto text-center hover:scale-105 md:hover:scale-100 duration-700 ease-in-out">
                    <table class="w-full text-xl  text-[#0E2144] font-mono text-center">
                        <thead class="text-xl bg-transparent text-[#0E2144] uppercase ">
                            <tr>
                                <th scope="col" class="py-3 px-6 grid item-center gap-2 text-center">
                                    <p>Wallet Address</p>
                                </th>
                                <th scope="col" class="py-3 px-6  text-center">
                                    <p>Action</p> 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {wallet && (auth.user._id == wallet.user) ?
                                <tr class="bg-transparent " >
                                    <td class="py-4 px-6" >
                                        {wallet.address}
                                    </td>
                                    <td class="py-4 px-6">
                                        <button onClick={() => { deleteWallet(wallet._id)}} className="rounded-bl-3xl rounded-tr-3xl  text-[#0E2144] text-base  bg-transparent border border-gray-600 w-full md:w-1/2 hover:border-2 hover:border-[#0E2144]  rounded-lg py-2 text-center ">Delete</button>
                                    </td>
                                </tr> : ''}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

Wallet.propTypes = {
    wallet: PropTypes.object.isRequired,
    getWallets: PropTypes.func.isRequired,
    deleteWallet : PropTypes.func.isRequired
  };
  
  const mapStateToProps = (state) => ({
      wallet: state.wallet,
      auth : state.auth
  });
  
  export default connect(mapStateToProps, { getWallet , deleteWallet })(Wallet);