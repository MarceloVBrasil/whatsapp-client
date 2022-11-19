import React from 'react'
import {useConversations} from './contexts/ConversationsProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComments } from '@fortawesome/free-solid-svg-icons'
import './css/conversations.css'

export default function Conversations() {
  const {conversations, selectedConversationIndex} = useConversations()
  return (
    <div className='conversations-container'>
     <div className='title'>Chats</div>
        {conversations.map((conversation, index) => (<>
          <div className='conversation-box' key={index} onClick={() => selectedConversationIndex(index)}>
             <FontAwesomeIcon icon={faComments} className='conversation-icon'/>      
            {conversation.recipients.map(r => r.name).join(', ')}         
          </div>
          <div className='line-break'/>
          </>
        ))}
        
    </div>
  )
}