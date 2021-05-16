import React from 'react'
import "./cssfiles/EventResults.css"
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function EventResults({
    img,location,title,description,star,price,total
}) {
    return (
        <div className="eventResults">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="event__heart"/>
            <div class="eventr__info">
                <div class="event__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>------</p>
                    <p>{description}</p>

        

                </div>
                <div class="event__infoBottom">
                    <div class="event__stars">
                        
                    <p>
                        <strong>{star}</strong>
                    </p>
                    </div>
                    <div class="event__price">
                        <h4>
                            {price}
                        </h4>
                     
                    </div>


                </div>
                </div>     
              </div>
    )
}

export default EventResults
