import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import "../cssfiles/SideBarChat.css";
import { db } from "../firebase";
function SideBarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const history = useHistory()
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName
      })
    }
  };
  return !addNewChat ? (
    <Link className="sideBarChat" to={`/dashboard/chat/${id}`} >
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div class="sidebarChat__info">
        <h2>{name}</h2>
        <p>Last messege..</p>
      </div>
    </Link >
  ) : (
      <div onClick={createChat} className="sideBarChat">
        <h4>Add New Chat</h4>
      </div>
    );
}

export default SideBarChat;
