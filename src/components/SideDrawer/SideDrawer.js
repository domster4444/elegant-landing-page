import React from 'react';

import './SideDrawer.css';

import { Link } from "react-router-dom";
// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio";
// import Resume from "../../pages/Resume";
// import Skills from "../../pages/Skills";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/profilemenu">SERVICE</Link>
        </li>
      
        <li>
        <Link to="/bookingsmenu">PORTFOLIO</Link>
      </li>
      <li>
        <Link to="/aboutusmenu">CONTACT</Link>
      </li>
      
      
      
        </ul>
    
        </nav>
        
  );
};

export default sideDrawer;
