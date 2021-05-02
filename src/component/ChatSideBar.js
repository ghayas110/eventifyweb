import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "../cssfiles/ChatSideBar.css";

import database from "../firebase";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { SearchOutlined } from "@material-ui/icons";
import SideBarChat from "./SideBarChat";
function ChatSideBar() {
  var [currentId, setCurrentId] = useState("");

  const addOrEdit = (obj) => {
    if (currentId === "")
      database
        .ref()
        .child("rooms")
        .push(obj, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    else
      database
        .ref()
        .child(`rooms/${currentId}`)
        .set(obj, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
  };
  return (
    <div className="ChatSideBar">
      <div class="sidebar__header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div class="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div class="sidebar__search">
        <div class="searchContainer">
          <SearchOutlined />
          <input placeholder="Search or Start New Chat" type="text" />
        </div>
      </div>
      <div class="sidebar__chats">
        <SideBarChat addNewChat addOrEdit={addOrEdit} />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
}

export default ChatSideBar;
