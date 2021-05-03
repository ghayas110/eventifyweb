

import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Header from "../Header";

import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';

import { Card } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'




import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import Feed from '../Feed';
import Event from '../Event';
import Profile from './Profile';

import ChatScreen from './ChatScreen';
import { EventAdd } from './EventAdd';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 25,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));

const sideBarItems = [
  { name: 'Home', links: '/dashboard', icon: <DashboardIcon /> },
  { name: 'Events', links: '/dashboard/event', icon: <MailIcon /> },
  { name: 'Profile', links: '/dashboard/profile', icon: <AccountCircleIcon /> },
  { name: 'Chat', links: '/dashboard/chat', icon: <AddToQueueIcon /> },
  { name: 'EventAdd', links: '/dashboard/eventadd' ,icon: <AccountTreeIcon />},
]

function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1000)
  let { path } = useRouteMatch();


  const handleDrawerToggle = () => {
    setOpen(!open);
  }

  useEffect(() => {

    window.addEventListener('resize', () => {
      // console.log(window.outerWidth)
      setScreenSize(window.outerWidth)
      if (screenSize <= 768) setOpen(false)
    })
    return () => {
    }
  }, [open])

  // if (props)

  const Component = ({ match }) => {
    // console.log(match.params.loc)
    var comp = match.params.loc
    // if (comp === 'Feed')
    //   return (
    //     // <MyReferals />
    //     <Feed />
    //   )
    if (comp === 'event')
      return (
        <Event />
      )
    else if (comp === 'profile')
      return (
        <Profile />
      )
      else if (comp === 'chat')
      return (
        <ChatScreen/>
      )
      else if (comp === 'eventadd')
      return (
        <EventAdd/>
      )
    // else if (comp === 'MyPlans')
    //   return (
    //     // <MyPlans />

    //   )
    // else if (comp === 'Profile')
    //   return (
    //     // <Profile />
    //     ''
    //   )
    // else if (comp === 'ProfileEdit')
    //   return (
    //     // <ProfileEdit />
    //     ''
    //   )
    // else if (comp === 'Checkout')
    //   return (
    //     // <Checkout />
    //     ''
    //   )
  }

  return (
    <>
      <div className="col-11 pt-5 pl-5 ml-5">
        <CssBaseline />
        <div>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar style={{ backgroundColor: 'white' }} >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => screenSize <= 768 ? '' : handleDrawerToggle()}
                edge="start"
                className={clsx(classes.menuButton)}
              >
                <MenuIcon style={{ color: screenSize <= 768 ? '#ccc' : '#cc6c2c' }} />
              </IconButton >
              <Header />
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            {/* <Toolbar />
              <Toolbar /> */}
            <div className={classes.drawerContainer} style={{ marginTop: screenSize <= 430 ? 142 : 88 }} >
              <Divider />
              {sideBarItems.map((item, index) => {
                var active = window.location.pathname
                // console.log(active === item.links, active, item.links)
                return (
                  <List style={{ color: "#cc6c2c", backgroundColor: active === item.links ? '#cc6c2c' : '#fff' }}>
                    <Link to={item.links} style={{ textDecoration: 'none' }}  >
                      <ListItem
                        button
                      >
                        <ListItemIcon>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} style={{ color: active === item.links ? '#fff' : "#cc6c2c", textDecorationStyle: 'none' }} />
                      </ListItem>
                    </Link>
                  </List>
                )
              })}

              {/* <List>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Widthdrawls"} />
                </ListItem>
              </List> */}

            </div>
          </Drawer>
        </div>
        <main className={classes.content}>
          <Card style={{ background: 'transparent' }} >
          </Card>
          <Switch>
            <Route exact path={'/dashboard'} component={Feed} />
            <Route  path={`${path}/:loc`} component={Component} />
            {/* <Route path={`${path}/UserPanel`} component={UserPanel} />
              <Route path={`${path}/ReferedBy`} component={ReferedBy} />
              <Route path={`${path}/MyReferals`} component={MyReferals} />
              <Route path={`${path}/ByPlans`} component={ByPlans} />
              <Route path={`${path}/MyPlans`} component={MyPlans} />
              <Route path={`${path}/Profile`} component={Profile} />
              <Route path={`${path}/ProfileEdit`} component={ProfileEdit} /> */}
          </Switch>
        </main>
      </div >
    </>
  )
}

export default Sidebar
