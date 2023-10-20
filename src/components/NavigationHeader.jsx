import React, { useState, useRef } from "react";
import logo from "../images/logo.png";
import "../styles/navigationHeader.css";

export default function NavigationHeader({onNavButtonClick}){
   const [showNavLinks, setShowNavLinks] = useState(false);
   const isMenuClicked = useRef(false);

   function handleButtonClick(elementId){
      isMenuClicked.current = !isMenuClicked.current;
      setShowNavLinks(false);
      onNavButtonClick(elementId);
   }

   return(
      <div className="header-container">
         <img className="header-logo" src={logo} alt="turtle insurance" />
         <div className={`header-navigation-links ${showNavLinks ? "show" : ""} `}>
            <button className="header-navigation-link" onClick={() => handleButtonClick("home")}>Home</button>
            <button className="header-navigation-link" onClick={() => handleButtonClick("products")}>Our products</button>
            <button className="header-navigation-link" onClick={() => handleButtonClick("enquiryform")}>Contact us</button>
         </div>
         <input type="checkbox" onClick={() => setShowNavLinks(!showNavLinks)} value={isMenuClicked.current}/>
          <div class="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
         
      </div>
   )
}