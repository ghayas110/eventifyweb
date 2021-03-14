import React from 'react'
import "./EventAdd.css"
function EventAdd() {
    return (
        <div className="eventadd">
            <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>ADD</span>
            <span>EVENT</span>
          </div>
         
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Title" />
            
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Location"/>
            </div>

            <div className="app-form-group">
              <input className="app-form-control" placeholder="PRICE"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Total Price"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" type="File"/>
            </div>
            <div className="app-form-group message">
              <textarea className="app-form-control" placeholder="Description" type="text-area"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">ADD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</div>
</div>
</div>


    )
}

export default EventAdd 

