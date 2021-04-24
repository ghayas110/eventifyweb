import React, { useState } from "react";
// import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: 40,
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  con: {
    textAlign: "left",
    fontSize: 18
  }

}));

const Profile = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
//   const { loggedInUser, userPlans } = useSelector((state) => state);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content} style={{ paddingTop: 80 }}>
        <Grid item >
          <div className={classes.iconsize} >
            <AccountCircleIcon style={{ fontSize: 60 }} color="primary" />
            <div >
              <h2>Ghayas110</h2>
              <div className={classes.con}>
                <p>Name:Ghayas Ali</p>
                <p >Email:ghayas110@gmail.com</p>
                <p>Phone No:03002661456</p>
                
                {/* <p>Invite Link: <a style={{ fontStyle: 'italic', fontSize: 14 }} href={`http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}`}>http://member.mshoppingworld.com/register/${loggedInUser.user.userCode}</a></p> */}
              </div>
              <div>
                <Button variant="outlined" color="primary" >Edit Profile</Button>
              </div>
            </div>

          </div>
        </Grid>
      </main>
      {/* whatsapp icon */}
    
    </div>
  );
}

export default withRouter(Profile)