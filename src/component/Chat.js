import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import React,{useState,useEffect} from 'react';
import '../cssfiles/chat.css';

function Chat() {
    const [input,setInput]= useState('')

    const [seed,setSeed]= useState('');
    useEffect(() => {
      setSeed(Math.floor(Math.random()*5000))
    }, []);

    const sendMessage =(e)=> {
e.preventDefault();
console.log("You Typed",input)
setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                 <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                 <div className="chat__info">
                     <h4>Room  No</h4>
                     <p>Last Seen...</p>
                     </div>
                     <div class="chat_headerRight">
                         <IconButton>
                             <SearchOutlined/>
                         </IconButton>
                         <IconButton>
                             <AttachFile/>
                         </IconButton>
                         <IconButton>
                             <MoreVertIcon/>
                         </IconButton>
                         
                         </div> 
           
                     </div>
                     <div className="chat_bodys">
                         <p className={`chat__message ${true && "chat__reciever"}`} ><span className="chat__name" > Ghayas Ali</span>Hey Guys<span className="timestamp" > 5:30</span>  </p>
                         <p className="chat__message">Hey Guys</p>
                         <p className="chat__message">Hey Guys</p>

</div>
                    <div className="chat_footer">
                    <InsertEmoticon/>
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder="Type Something"/>
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon/>
                    </div>
             
        </div>
    )
}

export default Chat
