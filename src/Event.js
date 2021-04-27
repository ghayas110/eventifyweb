import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./cssfiles/Event.css";
import EventResults from "./EventResults";
import profile from "./images/profile.jpg";
import database from "./firebase";
// import EventAddForm  from "./EventAddForm";
function Event() {
  const [events, setEvents] = useState({});
  const getEvents = () => {
    var rootRef = database.ref();
    rootRef.once("value").then(function (snapshot) {
      //   var key = snapshot.key; // null
      var eventdata = snapshot.child("eventify").val(); // "ada"
      setEvents([eventdata]);
    });
  };
  useEffect(() => {
    getEvents();
  }, []);
  const renderEvents = () => {
    if (events.length > 0) {
      return events.map((item, index) => {
        var detail = []
        for (const i in item) {
          detail.push(item[i])
        }
        return detail.map((item, index) => {
          return (
            <EventResults
              img={profile}
              location={item.location}
              title={item.title}
            description={item.description}
            star="4.75"
            price={"Rs" + item.price}
            />
          );
        })
      })
    }
  };
  return (
    <div className="Event">
      <div class="event__info">
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

        <Button variant="outlined">Birthday Event</Button>
        <Button variant="outlined">Wedding Event</Button>
        <Button variant="outlined">Celebration Event</Button>
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
