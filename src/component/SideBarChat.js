import { Avatar } from '@material-ui/core'
import React, {useState,useEffect} from 'react'
import '../cssfiles/SideBarChat.css'
function SideBarChat() {
    const [seed,setSeed]= useState('')
    useEffect(() => {
      setSeed(Math.floor(Math.random()*5000))
    }, [])
    return (
        <div className="sideBarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div class="sidebarChat__info">
                <h2>Ghayas</h2>
                <p>Last messege..</p>
            </div>
        </div>
    )
}

export default SideBarChat
