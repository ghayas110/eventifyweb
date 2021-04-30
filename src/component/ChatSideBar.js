import { Avatar,IconButton } from '@material-ui/core'
import React from 'react'
import '../cssfiles/ChatSideBar.css'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { SearchOutlined } from '@material-ui/icons';
import SideBarChat from './SideBarChat';
function ChatSideBar() {
    return (
        <div className="ChatSideBar">
         <div class="sidebar__header">
             <IconButton>
 
          <Avatar/>
          </IconButton>
<div class="sidebar__headerRight">
<IconButton>
<DonutLargeIcon/>
</IconButton>
<IconButton>
<ChatIcon/>
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>
</div>

         </div>
         <div class="sidebar__search">
             <div class="searchContainer">
<SearchOutlined/>
<input placeholder="Search or Start New Chat" type="text" />
</div>
         </div>
         <div class="sidebar__chats">
<SideBarChat addNewChat/>
<SideBarChat/>
<SideBarChat/>
         </div>
        
        </div>
    )
}

export default ChatSideBar
