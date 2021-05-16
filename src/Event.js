import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./cssfiles/Event.css";
import EventResults from "./EventResults";
import profile from "./images/profile.jpg";
import { db, projectStorage, } from "./firebase";

// import {db} from "./firebase";
// import EventAddForm  from "./EventAddForm";
function Event(props) {
  const [events, setEvent] = useState({});
  const [img, setimg] = useState([])
  const getEvents = () => {

    db.collection("event").onSnapshot(snapshot => (
      setEvent(snapshot.docs.map(doc => (
        {
          data: { data: doc.data(), url: projectStorage.ref(`images/${doc.id}`).getDownloadURL() }
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
      async function trying (url) {
        let image = await url.then(async (url) => { return url })
        console.log('image', image)
        return image.toString()
      }
      // console.log('state', img)
      return events.map((item, index) => {
        // console.log(item.data.data)
        const dtl = item.data.data
        const url = item.data.url
        // let l = trying(url)
        console.log('l', l)
        // console.log(img.filter(itm => { console.log('itm', itm.eventId === eventId); if (itm.eventId === eventId) return itm.url }))
        return (
          <EventResults
            img={l}
            location={dtl.location}
            title={dtl.title}
            description={dtl.description}
            price={"Rs" + dtl.price}
          />
        );
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

      {renderEvents()}
    </div>

  );
}

export default Event;
