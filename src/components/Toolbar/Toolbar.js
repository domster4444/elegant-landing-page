import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio";
// import Resume from "../../pages/Resume";
// import Skills from "../../pages/Skills";
import { Link } from "react-router-dom";

import logo from "../../psdassets/logo.png"





const toolbar = (props) => (
  
  
    <header className="toolbar">
      
      <div className='logoClsDiv'  data-aos="fade-right">
              <img src={logo} alt=""/>
            </div>
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="spacer" />
        
        <div className="toolbar_navigation-items">
        
          <ul> 
            <li className='li'>
              <Link to="/" id='homemenu'  className='toolbaranchorcls firstMenuSideDrawer' >HOME</Link>
            </li>
            <li  className='li'>
              <Link to="/profilemenu" id='portfoliomenu'  className='toolbaranchorcls'>SERVICE</Link>
            </li>
            <li  className='li'>
              <Link to="/bookingsmenu" id='resumemenu'   className='toolbaranchorcls'>PORTFOLIO</Link>
            </li>
            <li  className='li'>
              <Link to="/aboutusmenu" id='skillsmenu'   className='toolbaranchorcls'>CONTACT</Link>
              </li>

              <div id='line'></div>
          </ul>
          <button  className='mode'  onClick={()=>mode()}><div className='modecircle' ></div></button>
        </div>
      </nav>
    </header>
 
);

export default toolbar;



var a=1;
function mode(){
 
 if (a%2===0){
  //  dark mode
  document.getElementsByClassName('modecircle')[0].style.background='white'
  document.getElementsByClassName('mode')[0].style.background='grey'

  document.getElementsByClassName('modecircle')[0].style.transform='translateX(21px)'
  a+=1

// dark mode divs
document.getElementsByTagName('body')[0].style.background='black'
document.getElementsByClassName('h_container_1_card0')[0].style.background='black'
document.getElementsByClassName('h_container_1_card1')[0].style.background='black'
document.getElementsByClassName('h_container_1_card2')[0].style.background='black'
// yellow text in dark mode
document.getElementsByClassName('txt2home')[0].style.color='yellow'
  
   // heavy quotation 
   document.getElementsByClassName('txt3home')[0].style.color='white'
  //  about me text in dark mode
   document.getElementsByClassName('txt3home')[0].style.color='white'
//  border of myimage in darkmode

document.getElementsByClassName('imagediv')[0].style.border='1.5px solid white'




// anchor tag in dark mode
document.getElementsByClassName('toolbaranchorcls')[0].style.color='white'
document.getElementsByClassName('toolbaranchorcls')[1].style.color='white'
document.getElementsByClassName('toolbaranchorcls')[2].style.color='white'
document.getElementsByClassName('toolbaranchorcls')[3].style.color='white'
// line below anchor tag
document.getElementById('line').style.background='white'

// hamburger 3 divs background
document.getElementsByClassName('toggle-button__line')[0].style.background='white'
document.getElementsByClassName('toggle-button__line')[1].style.background='white'
document.getElementsByClassName('toggle-button__line')[2].style.background='white'


}else{
  document.getElementsByClassName('mode')[0].style.background='black'
  document.getElementsByClassName('modecircle')[0].style.background='yellow'
  
  document.getElementsByClassName('modecircle')[0].style.transform='translateX(0px)'
  a+=1



  // sunny mode divs
  document.getElementsByTagName('body')[0].style.background='wheat'
document.getElementsByClassName('h_container_1_card0')[0].style.background='wheat'
document.getElementsByClassName('h_container_1_card1')[0].style.background='wheat'
document.getElementsByClassName('h_container_1_card2')[0].style.background='wheat'
// yellow text in sunny mode
document.getElementsByClassName('txt2home')[0].style.color='black'
// anchor tag in sunny mode
document.getElementsByClassName('toolbaranchorcls')[0].style.color='black'
document.getElementsByClassName('toolbaranchorcls')[1].style.color='black'
document.getElementsByClassName('toolbaranchorcls')[2].style.color='black'
document.getElementsByClassName('toolbaranchorcls')[3].style.color='black'
// line below anchor tag in toolbar
document.getElementById('line').style.background='black'
// hamburger 3 divs background
document.getElementsByClassName('toggle-button__line')[0].style.background='black'
document.getElementsByClassName('toggle-button__line')[1].style.background='black'
document.getElementsByClassName('toggle-button__line')[2].style.background='black'

document.getElementsByClassName('toggle-button__line')[0].style.border='1px solid black'
document.getElementsByClassName('toggle-button__line')[1].style.border='1px solid black'
document.getElementsByClassName('toggle-button__line')[2].style.border='1px solid black'
// side drawer in sunny mode
  document.getElementsByClassName('side-drawer')[0].style.background='#37474F'
  // heavy quotation 
  document.getElementsByClassName('heavyquotaionentity')[0].style.color='black'

  document.getElementsByClassName('txt3home')[0].style.color='black'

//  border of myimage in darkmode

document.getElementsByClassName('imagediv')[0].style.border='1.5px solid black'


}
}







