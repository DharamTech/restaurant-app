import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from "./components/Home";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="App">
          <Router>
            <ul>
                       <li><Link to="/">Home</Link></li>
                          <li><Link to="/list">List</Link></li>
                              <li><Link to="/create">Create</Link></li>
                                <li><Link to="/search">Search</Link></li>
                            <li><Link to="/detail">Details</Link></li>
                   <li> <Link to="/update">Update</Link></li>
             </ul>
        
         </Router>
    </div>
  );
}

export default App;
