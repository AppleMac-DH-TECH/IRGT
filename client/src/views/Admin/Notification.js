import React, { useState , useEffect } from 'react';
import { connect } from 'react-redux';
import { getNotifications  , deleteNotification } from '../../actions/notification';
import { Text } from '../../components/languages/Text/Text';
const Notification = ({ getNotifications, deleteNotification, notification: { notifications }}) => {

    useEffect(() => {
        getNotifications();
    }, [getNotifications]);


    const [show, setShow] = useState(true);
    return (<>
        {/* <div><h1 className=' relative text-center text-white text-4xl font-mono'><Text tid={'notification'}/></h1></div> */}
        <div  className='relative m-auto text-left'>    
            {notifications && notifications.map((_notification, index) => (
                <div id="toast-simple" class="flex items-center p-4 mb-4 text-xl text-white bg-[rgba(13,9,255,0.6)]  rounded-lg " role="alert" key={ index}>
                        <svg aria-hidden="true" class="w-5 h-5 text-blue-600 " focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
                    <div class="pl-4  font-normal text-green font-mono text-xl">Request from {_notification.username} to {_notification.method} {_notification.amount}$ to {_notification.account }.</div>
                        <button onClick={() => { deleteNotification(_notification._id) }} >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button> 
                </div>

            ))}
        </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    notification: state.notification,
});

export default connect(mapStateToProps, { getNotifications  , deleteNotification })(Notification);