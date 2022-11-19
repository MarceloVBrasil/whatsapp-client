import React, { useState, useCallback } from 'react'
import './css/openConversation.css'
import {useConversations} from './contexts/ConversationsProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFaceSmile, faPaperclip, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass, faEllipsis, faCircleUser, faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export default function OpenConversation() {
  const [text, setText] = useState('');
  const {sendMessage, selectedConversation} = useConversations();
  const randomColor = Math.floor(Math.random()*16777215).toString(16);;

  const setRef = useCallback(node => {
    if(node)
      node.scrollIntoView({smooth: true})
  },[])

  function handleSubmit(e)
  {
    e.preventDefault();

    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    );
    setText('');

    const input = document.querySelector('.input-box')
    input.value = '';
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='header-left'>
          <FontAwesomeIcon icon={faCircleUser} className='header-user-icon'/>
          {selectedConversation.recipients.map(r => r.name).join(', ')}
        </div>
        <div className='header-centre'/>
        <div className='header-right'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifyingGlass'/>
            <FontAwesomeIcon icon={faEllipsis} className=''/>
        </div>
      </div>
      <div className='body'>
         {selectedConversation.messages.map((message, index) => {
           const lastMessage = selectedConversation.messages.length - 1 === index
           return (
             <div
                ref={lastMessage ? setRef : null} 
                key={index} className={`${message.fromMe ?
                'myMessages': 'contactMessages'}`
             }>
               <div
                  className={`${message.fromMe ?
                 'my-message-box' : 'contact-message-box'}`}>
                 {message.fromMe ? ""
                  : <span  style={{color: randomColor}}>
                    {message.senderName}</span>}
                  <div>{message.text}</div>
                </div>
             </div>
           )
         })}
      </div>
      <form className='footer' onSubmit={handleSubmit}>
        <FontAwesomeIcon icon={faFaceSmile} className=''/>
        <FontAwesomeIcon icon={faPaperclip} className='clip'/>
        <input type='text' placeholder='Type a message'
        onChange={e => setText(e.target.value)} className='input-box'/>
        <FontAwesomeIcon icon={faMicrophone} className=''/>
      </form>
    </div>
  )
}
