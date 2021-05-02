import React from 'react'
import Banner from './component/Banner'
import "./cssfiles/Feed.css"

import ana from "./images/ana.jpg"
import event from "./images/event.jpg"
import profile from "./images/profile.jpg"

import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

function Feed() {
  return (
    <div className="feed">

      <Banner />
      <div class="home__section">
        <CardDeck>
          <Card>
            <CardImg top width="100%" src={ana} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h3">Analytics</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Analyze your Progress</CardSubtitle>
              <CardText> This card has even longer content than the first to show that equal height action.</CardText>

              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={event} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h3">Events</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Events Catalog</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={profile} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h3">Profile</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Event Planner</CardSubtitle>
              <CardText> This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardDeck>
  );

            </div>
    </div>
  )
}

export default Feed;
