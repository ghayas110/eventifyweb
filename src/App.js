

import './App.css';
import Feed from './Feed';
import './Header'
import Header from './Header';
import Sidebar from './Sidebar';
import EventAdd from './EventAdd';
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
      <Route path="/addevent">
      <EventAdd/>
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
