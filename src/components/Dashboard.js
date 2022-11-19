import React from 'react'
import OpenConversation from './OpenConversation'
import Sidebar from './Sidebar'
import { useConversations } from './contexts/ConversationsProvider'

export default function Dashboard({id}) {
  const {selectedConversation} = useConversations()
  return (<>
          <Sidebar id={id}/>
          { selectedConversation && <OpenConversation />}
   </>
  )
}
