import React from "react";


import "./Home.css";

import iconOne from "../psdassets/iconOne.png";
import iconTwo from "../psdassets/iconTwo.png";
import iconThree from "../psdassets/iconThree.png";
import iconFour from "../psdassets/iconFour.png";

import whatWeDo from "../../src/psdassets/whatWeDo.png";

// import for portfolio starts
import "./CssForPortfolio.css";

// import image for portfolio
import ele from "./image/ele.png";
import horse from "./image/horse.png";
import leo from "./image/leo.png";
import lion from "./image/lion.png";
import rhino from "./image/rhino.png";
import tigerTwo from "./image/tiger-2.png";
import tigerThree from "./image/tiger-3.png";
import yak from "./image/yak.png";
// import for portfolio ends

// import for divfive
import icOne from "../psdassets/icOne.png";
import icTwo from "../psdassets/icTwo.png";
import icThree from "../psdassets/icThree.png";
import icFour from "../psdassets/icFour.png";
// import for divSix
import iOne from "../psdassets/iOne.png"
import iTwo from "../psdassets/iTwo.png"
import iThree from "../psdassets/iThree.png"
// import for divSeven
import fbIcon from '../psdassets/fbIcon.png'
import tweeterIcon from '../psdassets/tweeterIcon.png'
import googlePlusIcon from '../psdassets/googlePlusIcon.png'
import instagramIcon from '../psdassets/instagramIcon.png'
import behanceIcon from '../psdassets/behanceIcon.png'
import dribbleIcon from '../psdassets/dribbleIcon.png'


export default function Home() {










  return (
    <div className="homeMainMost">
      <div style={{ marginTop: "-60px" }} className="halfpiece"></div>

      <div className="divOne"   data-aos="slide-up">
        <div className="firstPara">Have an amazing business meeting</div>
        <div className="secondPara">Small business with big dreams</div>
        <div className="divOneButtonDiv">
          <button >Learn more</button>
        </div>
      </div>



      <div className="divContainerForCenteringDivTwo" >
        <div className="divTwo">
          <div className="leftSection">
            <img src={whatWeDo} alt="what we do text" />
          </div>
          <div className="rightSection" >
            <div className="col1" >
              <img className="iconOne" src={iconOne} alt="" />
              <span>Web Design</span>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </p>
            </div>
            <div className="col2">
              <img className="iconTwo" src={iconTwo} alt="" />{" "}
              <span>Web Design</span>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </p>
            </div>
            <div className="col3">
              <img className="iconThree" src={iconThree} alt="" />
              <span>Web Design</span>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </p>
            </div>
            <div className="col4">
              <img className="iconFour" src={iconFour} alt="" />
              <span>Web Design</span>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divContainerForCenteringDivThree">
        <div className="divThree" >
          <div className="firstParaDiv">
            <p>Exceptional Customer Service</p>
          </div>
          <div className="secondParaDiv">
            <p>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,
              <br />
              sed eiusmod tempor Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="buttonDiv">
            <button>Need to help? lets Chat</button>
          </div>
        </div>
      </div>

      <div className="divContainerForCenteringDivFour" >
       
     
        {/* -------------------------------------------------------------- portfolio copied code from my code collection -kshitiz*/}
        <section className="section-spacing bottom-none inverse-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">   <div className="firstParaDiv">
          <span>Our PortFolio</span>
        </div>
        <div className="secondParaDiv">
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
            eiusmod tempor
          </p>
        </div></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <ul id="filter-list">
                  <li className="filter active" data-filter="all">
                    ALL
                  </li>
                  <li className="filter" data-filter={1}>
                    Web
                  </li>
                  <li className="filter" data-filter={2}>
                    UI/UX
                  </li>
                  <li className="filter" data-filter={3}>
                    Photography
                  </li>
                  <li className="filter" data-filter={4}>
                    Branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gallery-outer">
            <ul
              className="gallery-items"
              style={{ padding: "0px", position: "relative", height: "600px" }}
            >
              <li
                className="filtr-item"
                data-category={1}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(0px,0px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={lion} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={lion}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*second*/}
              <li
                className="filtr-item"
                data-category={2}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(315.25px,0px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={horse} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={horse}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*third*/}
              <li
                className="filtr-item"
                data-category={4}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(630.5px,0px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={ele} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={ele}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*fourth*/}
              <li
                className="filtr-item"
                data-category={3}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(945.7px,0px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={tigerTwo} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={tigerTwo}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*fift*/}
              <li
                className="filtr-item"
                data-category={3}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(0px,315.25px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={tigerThree} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={tigerThree}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*sixth*/}
              <li
                className="filtr-item"
                data-category={5}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(315.25px,315.25px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={rhino} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={rhino}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*seven*/}
              <li
                className="filtr-item"
                data-category={3}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(630.5px,315.25px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={leo} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={leo}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
              {/*eight*/}
              <li
                className="filtr-item"
                data-category={4}
                style={{
                  opacity: 1,
                  transform: "scale(1) translate3d(945.7px,315.25px,0px)",
                  backfaceVisibility: "hidden",
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                  position: "absolute",
                  transition: "all 0.5s ease-in-out 0ms",
                  pointerEvents: "auto",
                }}
              >
                <div className="gallery-inner">
                  <img src={yak} alt="" />
                  <div className="gallery-overlay">
                    <a
                      href={yak}
                      className="venobox vbox-item"
                      data-gall="gallery"
                    >
                      <i className="fa fa-picture-o" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* portfolio ends */}
      </div>
      <div className="divContainerForCenteringDivFive" >
        <div className="col1">
          <img src={icOne} alt="" />
          <p className="number">3,800+</p>
          <p className="secondPara">Satisfied Clients</p>
        </div>
        <div className="col2">
          <img src={icTwo} alt="" />
          <p className="number">4510+</p>
          <p className="secondPara">Projects Completed</p>
        </div>
        <div className="col3">
          <img src={icThree} alt="" />
          <p className="number">2,800+</p>
          <p className="secondPara">Positive Feedbacks</p>
        </div>
        <div className="col4">
          <img src={icFour} alt="" />
          <p className="number">5,500+</p>
          <p className="secondPara">Freebies Released</p>
        </div>
      </div>

      <div className="divContainerForCenteringDivSix">
        <div className="firstParaDiv">
          <p>Contact</p>
        </div>
        <div className="secondParaDiv">
          <p>
            Lorem ipsum dolor sit amet,consectrtur adipiscing elit,sed do
            eiusmod tempor
          </p>
        </div>
        <div className="thirdParaDiv">
          <p>Leave A Message</p>
        </div>

        <div className="container">
          <div className="sectionOne">
            <form>
              <input type="text" placeholder="Full Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="text" placeholder="Subject"></input>
              <textarea type="text" placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="sectionTwo">
          <img className="iCls iOne" src={iOne} alt=""/>

          <img className="iCls iTwo" src={iTwo} alt=""/>
          <img className="iCls iThree" src={iThree} alt=""/>

            <div>
              <p className="addressTxt">Address:</p>
            </div>
            <div className="roadTxt">
              
              <p>
                69/A,Road 3,Mohammadia Housing Ltd
                <br />
                Dhaka-1207
              </p>
            </div>
            <div className="phNoTxt">
              <p>
                +8801750727522
                <br />
                +8801630742521
              </p>
            </div>
            <div className="gmailTxt">
              <p>muslimmahin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>



      <div className="divContainerForCenteringDivSeven">
<div className="sectionOne"><p>Created By Kshitiz &copy; Kshitiz Shah 2020</p></div>          
<div  className="sectionTwo">
  <img src={fbIcon} alt=""/>
  <img src={tweeterIcon} alt=""/>
  <img src={googlePlusIcon} alt=""/>
  <img src={instagramIcon} alt=""/>
  <img src={behanceIcon} alt=""/>
  <img src={dribbleIcon} alt=""/>
  
  </div>          
</div>

    </div>
  );
}

