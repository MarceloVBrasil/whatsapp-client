import React, {useState} from 'react'
import './css/sidebar.css'
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faMessage, faUserPlus, faComments} from '@fortawesome/free-solid-svg-icons'


export default function Sidebar({id}) {
    // const  CONVERSATIONS_KEY = 'conversations';
    // const  CONTACTS_KEY = 'contacts';
    const [leftTabOn, setLeftTabOn] = useState(true);
    const conversationsOpen = leftTabOn ? <FontAwesomeIcon icon={faComments} /> : <FontAwesomeIcon icon={faUserPlus} />;
    const [isModalOpened, setIsModalOpened] = useState(false);
    
  return (
    <>
    <div className='sidebar-container'>
        <div className="tabs">
          <button onClick={() => setLeftTabOn(true)} className='active'> <FontAwesomeIcon icon={faMessage} /></button>
          <button onClick={() => setLeftTabOn(false)} > <FontAwesomeIcon icon={faAddressBook} /></button>            
        </div>

        <div className='content'>
          {leftTabOn ? <Conversations/> : <Contacts />}
        </div>

        <div className='contact-id'>
          Your Id: {id}
        </div>
        <button className='action-btn' onClick={() =>setIsModalOpened(true)}>{conversationsOpen}</button>  
    </div>

    <div>
        {leftTabOn ? 
        <NewConversationModal trigger={isModalOpened} setTrigger={setIsModalOpened} className='modal'/> :
        <NewContactModal trigger={isModalOpened} setTrigger={setIsModalOpened} className='modal'/>}
    </div>     
    
    </>
  )
}
