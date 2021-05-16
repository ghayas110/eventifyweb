
import './cssfiles/App.css';
import Feed from './Feed';
import './Header'
import Header from './Header';
import Sidebar from './component/Sidebar';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from './Event';
import EventAddForm from './EventAddForm';
import Profile from './Profile';
import { AuthProvider } from "./contexts/AuthContext"
import ForgetFormPass from './forgotPassform';
import { Dashboard } from '@material-ui/icons';
function Dashboard() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        <div class="app__body">
          <AuthProvider>
            <Sidebar />
            <Switch>
              <Route path="/eventadd">
                <EventAddForm />
              </Route>

              {/*Feed */}
              <Route path="/event">
                <Event />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/epedit">
                <EventEditForm />
              </Route>
              <Route path="/">
                <Feed />
              </Route>
              {/*Event */}

            </Switch>
          </AuthProvider>

        </div>

      </Router>
    </div>
  )
}
export default Dashboard;
