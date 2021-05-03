import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import '../cssfiles/SideBarChat.css'
function SideBarChat({ addNewChat }) {
    const [seed, setSeed] = useState('')
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt('please enter name for chat');
        if (roomName) {
            //do some Database
        }

    }
    return !addNewChat ? (
        <div className="sideBarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div class="sidebarChat__info">
                <h2>Ghayas</h2>
                <p>Last messege..</p>
            </div>
        </div>
    ) : (
            <div onClick={createChat} className="sideBarChat">
                <h4>Add New Chat</h4>
            </div>
        );
}

export default SideBarChat
