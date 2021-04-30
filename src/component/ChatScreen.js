import React from 'react'
import '../cssfiles/ChatScreen.css'
import ChatSideBar from './ChatSideBar'
function ChatScreen() {
    return (
        <div className="ChatScreen w-100 " >
        
            <div class="chat__body">
<ChatSideBar/>
            </div>
        </div>
    )
}
 
export default ChatScreen
