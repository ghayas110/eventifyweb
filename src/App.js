

import './cssfiles/App.css';
import Feed from './Feed';
import './Header'
import Header from './Header';
import Sidebar from './component/Sidebar';
import SignupForm from './component/SignupForm'
import SigninForm from './component/SigninForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from './Event';
import EventAddForm from './EventAddForm';
import Profile from './component/Profile';
import { AuthProvider } from "./contexts/AuthContext"

import ForgetFormPass from './component/forgotPassform';

import EventEditForm from './component/EventEditForm';
import ChatScreen from './component/ChatScreen';
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        {/* Header */}


        <div class="app__body">
          <AuthProvider>
            {/* <Sidebar /> */}

            <Switch>
              <Route path="/eventadd">
                <EventAddForm />
              </Route>

              <Route path="/signup">
                <SignupForm />
              </Route>
              <Route path="/forgot">
                <ForgetFormPass />
              </Route>
              <Route path="/epedit">
                <EventEditForm />
              </Route>

              {/*Feed */}
              <Route path="/event">
                <Event />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/dashboard">
                <Sidebar />
              </Route>
              {/* <Route path="/chat">
                <ChatScreen />
              </Route> */}
              {/*Event */}
              <Route path="/">
                <SigninForm />
              </Route>
            </Switch>
          </AuthProvider>

        </div>

      </Router>
    </div>
  );
}

export default App;
