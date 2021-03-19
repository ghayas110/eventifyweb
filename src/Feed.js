import React from 'react'
import Banner from './Banner'
import "./cssfiles/Feed.css"
import Card from './Card'
import ana from "./images/ana.jpg"
import event from "./images/event.jpg"
import profile from "./images/profile.jpg"
import chat from "./images/chat.jpg"

function Feed() {
    return (
        <div className="feed">
         
            <Banner/>
            <div class="home__section">
                <Card src={ana} title ="Analytics" description="Analyzation event planner " />
                <Card src={event} title ="Events" description="Create event planner " />
                <Card src={profile} title ="Profile" description="Profile of event planner " />
                <Card src={chat} title ="Chat" description="Chat of event planner " />
            </div>
        </div>
    )
}

export default Feed
