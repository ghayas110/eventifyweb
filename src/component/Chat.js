import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';

import React, { useState, useEffect } from 'react';
import '../cssfiles/chat.css';
import { useParams } from "react-router-dom";
import { db } from '../firebase';
import { useAuth } from "../contexts/AuthContext";
import firebase from "firebase";
function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const { currentUser } = useAuth()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
                setRoomName(snapshot.data().name)
            ));
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => setMessages(snapshot.docs.map((doc) => doc.data())))
        }

    }, [roomId]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You Typed", input);
        db.collection("rooms").doc(roomId).collection('messages').add({
            message: input,
            name: currentUser.email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__info">
                    <h4>{roomName}</h4>
                    <p>
                        Lastseen{" "}
                        {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>
                <div class="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>

            </div>
            <div className="chat_bodys">
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === currentUser.email && "chat__reciever"}`} ><span className="chat__name" > {message.name}</span>{message.message}<span className="timestamp" > {new Date(message.timestamp?.toDate()).toUTCString()}</span>  </p>

                ))}


            </div>
            <div className="chat_footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type Something" />
                    <button onClick={sendMessage} type="submit">Send a Message</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat
