import React, { useEffect} from 'react';
import { Text } from '../../components/languages/Text/Text';
import { connect } from 'react-redux';
import { getNotification } from '../../actions/notification';
import { Link, useParams } from 'react-router-dom';

const AdminRecord = ({ getNotification, notification: { notification } }) => { 
    const { _id } = useParams('_id')

    useEffect(() => {
        getNotification(_id);
    },[getNotification]);

    return (
        <>
        <div className='relative'>
            <h1 className='text-center text-white  m-auto text-2xl mt-10'><Text tid={'fundrecord'}/></h1>
        </div>

        <div class="overflow-x-auto  relative  hover:shadow-lg container m-auto">
                
            <table class="overflow-x-auto w-full text-xl  text-white font-mono text-center hover:shadow-2xl ">
                <thead class="text-xl bg-transparent text-white uppercase ">
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
                    {notification && notification.map((_notification  , index ) => (
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
        </>
    )
}


const mapStateToProps = (state) => ({
    notification : state.notification
});


export default connect(mapStateToProps, { getNotification })(AdminRecord);
