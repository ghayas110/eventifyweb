

import './cssfiles/App.css';
import Feed from './Feed';
import './Header'
import Header from './Header';
import Sidebar from './Sidebar';
import SignupForm from './SignupForm'
import SigninForm from './SigninForm'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Event from './Event';
function App() {
  return (
    <div className="App">
     <Router>
      {/* Header */}
      <Header/>
    <div class="app__body">

      <Sidebar/>
      <Switch>
      <Route path="/signin">
      <SigninForm/>
      </Route>
      <Route path="/signup">
      <SignupForm/>
      </Route>
      {/*Feed */}
      <Route path="/event">
      <Event/>
      </Route>
      <Route path="/">
      <Feed/>
      </Route>
      {/*Event */}
 
      </Switch>

         
    </div>
  
    </Router>
    </div>
  );
}

export default App;
