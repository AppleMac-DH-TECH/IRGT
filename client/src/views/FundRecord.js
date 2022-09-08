import React, { useEffect} from 'react';
import { Text } from '../components/languages/Text/Text';
import { connect } from 'react-redux';
import { getNotifications } from '../actions/notification';

const FundRecords = ({ getNotifications, notifications: { notifications} }) => { 
    
    useEffect(() => {
        getNotifications();
    },[getNotifications]);

    return (
        <>
        <div className='relative'>
            <h1 className='text-center text-[#0E2144] m-auto text-2xl mt-10'><Text tid={'fundrecord'}/></h1>
        </div>

        <div class="overflow-x-auto rounded-full md:rounded-3xl overflow-auto relative shadow-md  m-auto text-xl mt-10">
            <div className='container overflow-x-auto  shadow-2xl bg-transparent  m-auto text-center  md:hover:scale-100 duration-700 ease-in-out'>
                <table class="overflow-x-auto  w-full text-xl  text-[#0E2144]  font-mono text-center hover:shadow-2xl ">
                    <thead class="text-xl bg-transparent text-[#0E2144]  uppercase ">
                        <tr>    
                            <th scope="col" class="py-1 px-6  text-center">
                                <p><Text tid={'to'}/></p> 
                            </th> 
                            <th scope="col" class="py-1 px-6  text-center">
                                <p><Text tid={'amount'}/></p> 
                            </th>  
                            <th scope="col" class="py-1 px-6  text-center">
                                <p><Text tid={'method'}/></p> 
                            </th>
                            <th scope="col" class="py-1 px-6  text-center">
                                <p><Text tid={'date'}/></p>
                            </th>
                        </tr>
                    </thead>
                        <tbody>
                        {notifications && notifications.map((_notification  , index ) => (
                            <tr class=" border-b bg-transparent " key={ index }>
                                <td class="py-3 px-6">
                                    {_notification.account }
                                </td>
                                <td class="py-3 px-6">
                                    { _notification.amount}
                                </td>
                                <td class="py-3 px-6">
                                    <Text tid={`${_notification.method}`}/>
                                </td>
                                <td class="py-3 px-6">
                                    { _notification.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    notifications : state.notification
});


export default connect(mapStateToProps, {  getNotifications })(FundRecords);