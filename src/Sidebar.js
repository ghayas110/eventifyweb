import React from 'react'
import SidebarRow from './SidebarRow'
import EventIcon from '@material-ui/icons/Event';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ghayas from'./ghayas.jpg'
import ChatIcon from '@material-ui/icons/Chat';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={ghayas} title="Ghayas"/>
            <SidebarRow Icon={EventIcon} title="Event"/>
            <SidebarRow Icon={AccountCircleIcon} title="Profile"/>
            <SidebarRow Icon={AssessmentIcon} title="Analytics"/>
            <SidebarRow Icon={ChatIcon} title="Chat"/>
            <SidebarRow Icon={AccountTreeIcon} title="Projects"/>
        </div>
    )
}

export default Sidebar
