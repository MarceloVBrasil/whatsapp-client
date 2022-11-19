import React, { useRef } from 'react'
import './css/modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import {useContacts} from './contexts/ContactsProvider'

export default function NewContactModal(props) {
    const contactNameRef = useRef();
    const contactIdRef = useRef();
    const {createContact} = useContacts()

    function handleSubmit(e)
    {
        e.preventDefault();

        createContact(contactIdRef.current.value, contactNameRef.current.value);
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div className='modal'>
            <form className='contact-form' onSubmit={handleSubmit}>
                <button onClick={() => props.setTrigger(false)} className='close-btn'>
                <FontAwesomeIcon icon={faXmark} />
                </button>

                <label>Name:</label>
                <input type="text" ref={contactNameRef} placeholder="enter contact name..." required/>

                <label>Id:</label>
                <input type="text" ref={contactIdRef} placeholder="enter contact Id..." required/>
                
                <button type='submit' className='submit-btn'><FontAwesomeIcon icon={faPlus} /></button>
            </form>
            {props.children}
        </div>
    ) : "";
}
