import React from 'react'
import '../cssfiles/ChatScreen.css'
import Chat from './Chat'
import ChatSideBar from './ChatSideBar'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
function ChatScreen() {

    let { path } = useRouteMatch();

    const ChatRoute = ({ match }) => {
        // console.log(match.params.loc)
        var roomId = match.params.roomId
        return (
            <Chat roomId={roomId} />
        )
    }


    return (
        <div className="ChatScreen" >
            <div class="chat__body">
                {/* <Router> */}
                <ChatSideBar />
                <Switch>
                    <Route exact path={`${path}/:roomId`} component={Chat} />
                    {/* <Route path="dashboard/chat" component={Chat} /> */}
                </Switch>
                {/* </Router> */}
            </div>
        </div>
    )
}

export default ChatScreen
