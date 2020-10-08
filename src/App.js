import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css'

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bookings from "./pages/Bookings";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route} from "react-router-dom";





class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
   <>
   <Router>
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '60px'}}>
          



        <Route exact path="/" component={Home} />
        <Route path="/profilemenu" component={Profile} />
        <Route path="/bookingsmenu" component={Bookings} />
        <Route path="/aboutusmenu" component={AboutUs} />
        <Route path="/signupmenu" component={SignUp} />









        </main>
        
      </div>
</Router>
</>
);
  }
}

export default App;
