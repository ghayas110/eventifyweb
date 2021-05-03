import { Avatar,IconButton } from '@material-ui/core'
import React ,{useState,useEffect} from 'react'
import '../cssfiles/ChatSideBar.css'


import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { SearchOutlined } from '@material-ui/icons';
import SideBarChat from './SideBarChat';
import { db } from '../firebase';
function ChatSideBar() {
const [rooms, setRooms] = useState([])
useEffect(() => {
const unsubscribe=db.collection('rooms').onSnapshot(
     snapshot=>(
         setRooms(snapshot.docs.map(doc=>({
             id:doc.id,
             data:doc.data()
         })) )
     )
 );
 return()=>{
     unsubscribe();
 }
}, []);
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
<SideBarChat addNewChat />
{rooms.map( room=>(<SideBarChat key={room.id} id={room.id} name={room.data.name}/>))}
         </div>
        
        </div>
    )
}

export default ChatSideBar
