import { Button } from '@material-ui/core'
import React  from 'react'
import "./cssfiles/Event.css"
import EventResults from './EventResults'
import hotel from "./images/hotel.jpg"
import profile from "./images/profile.jpg"

function Event() {
   
    return (
        <div className="Event">
           <div class="event__info">
               <div class="header">
                   <div class="head1">
               <p>Event Page</p>
              <h1>Active Events</h1>
              </div>
              <div class="head2">
              <h1>Add Event</h1>
              <Button variant="outlined">Add Event</Button>
              </div>
              </div>


               <Button variant="outlined">Birthday Event</Button>
               <Button variant="outlined">Wedding Event</Button>
               <Button variant="outlined">Celebration Event</Button>
           </div>
           <EventResults img={hotel} location="IRC Lawn FB Area Karachi" title="Birthday Event for Ghayas Ali" description="Cake writen 23rd Birthday and no music involved" star="4.75" price="5000 PKR/6Hrs" />
           <EventResults img={profile} location="IRC Lawn FB Area Karachi" title="Birthday Event for Ghayas Ali"  description="Cake writen 23rd Birthday and no music involved" star="4.75" price="5000 PKR/6Hrs"  />
        </div>
    )
}

export default Event
