import React from 'react'
import Banner from './Banner'
import "./Feed.css"
import Card from './Card'
import ana from "./ana.jpg"
import event from "./event.jpg"
import profile from "./profile.jpg"
import chat from "./chat.jpg"

function Feed() {
    return (
        <div className="feed">
         
            <Banner/>
            <div class="home__section">
                <Card src={ana} title ="Analytics" description="Analyzation event planner " />
                <Card src={event} title ="Events" description="Events to create event planner " />
                <Card src={profile} title ="Profile" description="Profile of event planner " />
                <Card src={chat} title ="Chat" description="Chat of event planner " />
            </div>
        </div>
    )
}

export default Feed
