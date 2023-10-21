import React, { useState, useEffect } from "react";
import NavigationHeader from "./components/NavigationHeader.jsx";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Form from "./components/Form.jsx";
import "./styles/app.css";

export default function App(){
   const [selectedPackage, setSelectedPackage] = useState("");

   useEffect(() => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
       })
   }, []);

   function onNavButtonClick(elementId){
      const element = document.getElementById(elementId);
      element.scrollIntoView({ block: "center"});
   }

   function onProductSelected(packageName){
      onNavButtonClick("enquiryform");
      setSelectedPackage(packageName);
   }

   return (
      <>
         <NavigationHeader onNavButtonClick={onNavButtonClick} /> 
         <Home />
         <Products onSelect={onProductSelected} />
         <Form selectedPackage={selectedPackage} clearSelectedPackage={() => setSelectedPackage("")} />
      </>
   )
}