import React, {useRef, useState} from 'react'
import './css/modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import {useContacts} from './contexts/ContactsProvider'
import {useConversations} from './contexts/ConversationsProvider'

export default function NewConversationModal(props) {
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    const {contacts} = useContacts();
     const {createConversation, conversations} = useConversations();

    function handleSubmit(e)
    {
        e.preventDefault();


        conversations.forEach(conversation => objToArray(conversation.recipients)) 

        
        if(!isArrayinArray(allIds, selectedContactIds))
        {
            createConversation(selectedContactIds);
        }     
        props.setTrigger(false);
        setSelectedContactIds([]); 

    }

    let allIds = []; 
    function objToArray(recipients) 
    {
        let ids = []
        recipients.forEach(recipient =>
        {
            ids.push(recipient['id'])
        })
        allIds.push(ids);
    }
    
    function isArrayinArray(A, a)
    {
        let isEqual = false;
        A.forEach(arr => {
            if(AreArrayEqual(arr, a))
            {
                isEqual = true;
            }
        })
        return isEqual;
    }

    function AreArrayEqual(a,b) 
    {
        if(a.length !== b.length || a === null || b === null)
        {
            return false;
        }
        else
        {
            const len = a.length
            for(let i = 0; i < len; i++)
            {
                if(a[i] !== b[i])
                {
                    return false;
                }
            }
            return true;
        }
    }

    function handleCheckboxChange(contactId)
    {
        setSelectedContactIds(prevSelectedContactIds =>{
            
            return [...prevSelectedContactIds,contactId];
        })
    }

  return (props.trigger) ? (
       <div className='modal'>
           <div className='background'>
            <button onClick={() => props.setTrigger(false)} className='close-btn-conversations'>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <form onSubmit={handleSubmit} className='conversation-form'>
                {contacts.map(contact => (<>
                    <div className='conversations-box' key={contact.id}>
                        <input type='checkbox' value={selectedContactIds.includes(contact.id)}
                        onChange={() => handleCheckboxChange(contact.id)} name={contact.name} className='checkbox'/>{contact.name}
                    </div>
                </>
                ))}
                <button type='submit' className='begin-conversation-btn'><FontAwesomeIcon icon={faPlus} /></button>
            </form>
            {props.children}
            </div>
        </div>
    ) : "";
}
