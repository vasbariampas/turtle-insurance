import React, { useState } from "react";
import logo from "../images/logo.png";
import "../styles/navigationHeader.css";

export default function NavigationHeader(){
   const [showNavLinks, setShowNavLinks] = useState(false);

   return(
      <div className="header-container">
         <img className="header-logo" src={logo} alt="turtle insurance" />
         <div className={`header-navigation-links ${showNavLinks ? "show" : ""} `}>
            <button className="header-navigation-link">Why trust us</button>
            <button className="header-navigation-link">Our products</button>
            <button className="header-navigation-link">Contact us</button>
         </div>
         <input type="checkbox" onClick={() => setShowNavLinks(!showNavLinks)} />
          <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
          </div>
         
      </div>
   )
}