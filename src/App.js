
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Admin from './Component/Home/Admin/Admin/Admin';
import ServiceBooking from './Component/Home/BookingService/ServiceBooking';
import Review from './Component/Home/Reviews/Reviews';
import { createContext, useState } from 'react';
import PraivateRoute from './Component/Home/PrivateRoute/PraivateRoute';
import Login from './Component/Home/Login/Login';


export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PraivateRoute path="/serviceBooking/:_id">
            <ServiceBooking />
          </PraivateRoute>
          <PraivateRoute path="/admin">
            <Admin />
          </PraivateRoute>
          <PraivateRoute path="/review">
            <Review />
          </PraivateRoute>
        </Switch>
      </Router>

    </userContext.Provider>
  );
}

export default App;
