import { Button } from '@material-ui/core'
import React from 'react'
import "./banner.css"
function Banner() {
    return (
        <div className="banner">
          <div class="banner__info">
              <h1>Help Events Generate Smile</h1>
              <h5>Offer Event services at your Flexible Rates</h5>
               <Button variant="outlined">Explore More</Button>

          </div>
        </div>
    )
}

export default Banner
