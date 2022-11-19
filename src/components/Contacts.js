import React from 'react'
import { useContacts } from './contexts/ContactsProvider'
import './css/contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserLarge } from '@fortawesome/free-solid-svg-icons'

export default function Contacts() {
  const {contacts} = useContacts()
  return (
    <div className='contacts-container'>
      <div className='title'>Contacts</div>
        {contacts.map(contact => (<>
          <div className='contact-box' key={contact.id}>
            <FontAwesomeIcon icon={faUserLarge} className='contact-icon'/> {contact.name}            
          </div>
          <div className='line-break'/>
          </>
        ))}
      
    </div>
  )
}
