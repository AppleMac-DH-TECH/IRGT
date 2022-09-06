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
        <div className='relative container m-auto '> 
            {!wallet && (<Link to={'/createWallet'} className="rounded-bl-3xl rounded-tr-3xl mt-5 inline-flex justify-center items-center gap-5 text-white text-xl  bg-transparent border border-white  w-full hover:border-black hover:text-2xl  rounded-lg  px-6 py-3.5 text-center">
                <b>Add New Wallet</b>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                </svg>
            </Link>)}


            <div class="overflow-x-auto overflow-auto relative shadow-md sm:rounded-lg m-auto text-xl mt-10">
                
                    <table class="w-full text-xl  text-white font-mono text-center hover:shadow-2xl ">
                        <thead class="text-xl bg-transparent text-white uppercase ">
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
                            <tr class=" border-b bg-transparent " >
                                <td class="py-4 px-6" >
                                    {wallet.address}
                                </td>
                                <td class="py-4 px-6">
                                    <button onClick={() => { deleteWallet(wallet._id) }} class="text-white p-2 bg-blue-500 hover:bg-blue-700 font-mono rounded rounded-tl-lg rounded-br-lg">Delete</button>
                                </td>
                            </tr> : ''}
                        </tbody>
                    </table>
                
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