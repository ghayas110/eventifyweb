

import './cssfiles/App.css';
import Feed from './Feed';
import './Header'
import Header from './Header';
import Sidebar from './Sidebar';
import SignupForm from './component/SignupForm'
import SigninForm from './component/SigninForm'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Event from './Event';
import EventAddForm from './EventAddForm';
import Profile from './component/Profile';
import { AuthProvider } from "./contexts/AuthContext"
import ForgotPassword from './component/ForgetPassword';
import ForgetFormPass from './component/forgotPassform';
function App() {
  return (
    <div className="App">
     <Router>
      {/* Header */}
      <Header/>
    <div class="app__body">
    <AuthProvider>
      <Sidebar/>
      <Switch>
      <Route path="/eventadd">
      <EventAddForm/>
      </Route>
      <Route path="/signin">
      <SigninForm/>
      </Route>
      <Route path="/signup">
      <SignupForm/>
      </Route>
      <Route path="/forgot">
      <ForgetFormPass/>
      </Route>
      {/*Feed */}
      <Route path="/event">
      <Event/>
      </Route>
      <Route path="/profile">
      <Profile/>
      </Route>
      <Route path="/">
      <Feed/>
      </Route>
      {/*Event */}
 
      </Switch>
      </AuthProvider>
         
    </div>
  
    </Router>
    </div>
  );
}

export default App;
