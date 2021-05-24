import React from 'react'
import "../cssfiles/EventResults.css"
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function NotiResults({
    yemail,group
}) {
    return (
        <div className="eventResults">
            
            <FavoriteBorderIcon className="event__heart"/>
            <div class="eventr__info">
                <div class="event__infoTop">
                    <p>{yemail} want to talk to you Create Group </p>
                    <h3>{group}</h3>
                 

        

                </div>
               
                </div>     
              </div>
    )
}

export default NotiResults
