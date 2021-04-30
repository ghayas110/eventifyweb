import React from 'react'
import '../cssfiles/ChatScreen.css'
import Chat from './Chat'
import ChatSideBar from './ChatSideBar'
function ChatScreen() {
    return (
        <div className="ChatScreen w-100 " >
        
            <div class="chat__body">
<ChatSideBar/>
<Chat/>
            </div>
        </div>
    )
}
 
export default ChatScreen
