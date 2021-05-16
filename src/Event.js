import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./cssfiles/Event.css";
import EventResults from "./EventResults";
import profile from "./images/profile.jpg";
import { db, projectStorage,  } from "./firebase";
import { useAuth } from "./contexts/AuthContext";
// import {db} from "./firebase";
// import EventAddForm  from "./EventAddForm";
function Event(item) {
  const [events, setEvent] = useState({});
  const {currentUser} = useAuth()
  const getEvents = () => {
console.log(currentUser);
debugger

  db.collection("event").where('currentUser',"==", currentUser.email).onSnapshot(snapshot=>(
      setEvent(snapshot.docs.map(doc=>(
          {
            
            //   id:doc.id,
              data: doc.data()
          }
      )))
  ))
 
  };
  useEffect(() => {
    getEvents();
  }, []);
  const renderEvents = () => {

    if (events.length > 0) {

      console.log("events", events[0]);
      return events.map((item, index) => {
        var detail = []
        console.log("ï", item)
        for (const i in item) {
          detail.push(item[i])
        }
        return detail.map((item, index) => {
          // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
          return (
          
            <EventResults
            
              img={item.postImage}
              location={item.location}
              title={item.title}
              description={item.description}
              
              price={"Rs" + item.price}
            />
          );
        })
      })
    }
  };
  return (

    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <p>Event Page</p>
          <h1>Active Events</h1>
          <Button variant="outlined" onClick={'/eventadd'}>
            Add Event
            </Button>
        </div>

      </div>

      {/* <div class="event__info">
        <div class="headers">
          <div class="head1">
            <p>Event Page</p>
            <h1>Active Events</h1>
          </div>
          <div class="head2">
            <h1>Add Event</h1>
            <Button variant="outlined" onClick={"/eventadd"}>
              Add Event
            </Button>
          </div>
        </div>

  
      </div>
      {/* <EventResults
        img={hotel}
        location="IRC Lawn FB Area Karachi"
        title="Birthday Event for Ghayas Ali"
        description="Cake writen 23rd Birthday and no music involved"
        star="4.75"
        price="5000 PKR/6Hrs"
      />
      <EventResults
        img={profile}
        location="IRC Lawn FB Area Karachi"
        title="Birthday Event for Ghayas Ali"
        description="Cake writen 23rd Birthday and no music involved"
        star="4.75"
        price="5000 PKR/6Hrs"
      /> */}
   
  
      { 
      renderEvents()}
    </div>

  );
}

export default Event;
