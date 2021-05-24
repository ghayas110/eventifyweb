import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from 'react-router-dom'
import "../cssfiles/Event.css";
import NotiResults from "./NotiResults";

import { db, projectStorage, } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
// import {db} from "./firebase";
// import EventAddForm  from "./EventAddForm";
function NotificationScreen(item) {
  const [events, setEvent] = useState({});
  const { currentUser } = useAuth()
  const getEvents = () => {
    console.log(currentUser);

    db.collection("group").where('eemail', "==", currentUser.email).onSnapshot(snapshot => (
      setEvent(snapshot.docs.map(doc => (
        {

          //   id:doc.id,
          data: doc.data()
        }
      )))
    ))

  };
  useEffect(() => {
    getEvents();
    // var imageURL = []
    // for (const i in events) {
    //   console.log(events[i].data.id)
    //   projectStorage.ref(`images/${events[i].data.id}`).getDownloadURL().then((url) => imageURL.push({ eventId: events[i].data.id, url: url }))
    // }
    // setimg(imageURL)
  }, []);
  const renderEvents = () => {
    if (events.length > 0) {
      console.log("events", events);
      async function trying(url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return events.map((item, index) => {
        var detail = []
        console.log("ï", item)
        for (const i in item) {
          detail.push(item[i])
        }
        return detail.map((item, index) => {
          // const storageRef = projectStorage.ref(`images/${item.id}/`).getDownloadURL();
          return (

            <NotiResults
              group={item.group}
              yemail={item.yemail}
              
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
          <p>Notification</p>
          <h1>Active Notification</h1>
          <Button variant="outlined">
            <Link to={'/dashboard/chat'} >
              Go to Chat</Link>
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

export default  NotificationScreen;
