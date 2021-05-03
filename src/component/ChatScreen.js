import React from 'react'
import '../cssfiles/ChatScreen.css'
import Chat from './Chat'
import ChatSideBar from './ChatSideBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function ChatScreen() {
   
  
    return (
        <div className="ChatScreen  " >
        
            <div class="chat__body">
                <Router>
                    <Switch>
                        <ChatSideBar/>
                        <Route path="/rooms/:roomId">
                            
                            <Chat/>
                            </Route>
                            <Route path="dashboard/chat">

                            </Route>


</Switch>
</Router>
            </div>
        </div>
    )
}
 
export default ChatScreen
