import React from 'react'
import "../cssfiles/EventResults.css"
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button, ButtonBase } from '@material-ui/core';
import { useAuth } from "../contexts/AuthContext";
import { db, projectStorage } from "../firebase";
function NotiResults({
    yemail,group
}) 

{
    const { currentUser } = useAuth()
    const handleSubmit = (e) => {

        e.preventDefault();
       
    
        db.collection("notify").add(
          {
              currentUser:currentUser.email,
              yemail:"ghayas110@gmail.com"

          })
          alert("Requend Sended")
        }    
    return (
        <div className="eventResults">
            
            <FavoriteBorderIcon className="event__heart"/>
            <div class="eventr__info">
                <div class="event__infoTop">
                    <p>{yemail} want to talk to you Create Group </p>
                    <h3>{group}</h3>
                 <Button variant="outlined"  onClick={handleSubmit}>Accept</Button>

        

                </div>
               
                </div>     
              </div>
    )
}

export default NotiResults
