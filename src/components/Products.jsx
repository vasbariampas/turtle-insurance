import React from "react";
import Package from "./Package.jsx";
import "../styles/products.css";

export default function Products({onSelect}){
   const tier1 = [
      "Basic coverage for minor turtle and tortoise attacks", 
      "Free band-aids for shell-related scratches", 
      'Access to our exclusive "Turtle Whisperer" helpline',
       "Complimentary turtle-themed first aid kit", 
       "Emergency shell polish for cosmetic repairs", 
       "Discounted turtle shell fashion accessories" ];
   const tier2 = [
      "Comprehensive protection against turtle and tortoise-related incidents", 
      'VIP access to our 24/7 "Turtle Tracker" service', 
      "Emergency anti-turtle training seminar",
       "Turtle and tortoise attack response team dispatched to your locationComplimentary turtle-themed first aid kit", 
       "Priority care at Turtle Rehabilitation Centers", 
       "Complimentary turtle repellent spray" ];
   const tier3 = [
      "Total coverage for even the most elusive and menacing turtles and tortoises", 
      "Personal turtle and tortoise bodyguard (subject to availability)", 
      "Private island retreat for post-attack recovery",
       'Exclusive access to our "Turtle Therapy" spa', 
       "Turtle attack risk assessment for your home and workplace", 
       "Lifetime supply of turtle-proof armor" ];

   return (
      <div id="products" className="products">
         <Package 
            id="essential"
            title="Essential Shell Shield 🐢🛡️"
            perks={tier1}
            onSelect={onSelect} 
         />
         <Package 
            id="premium"
            title="Premium Reptile Resilience 🐢🚑"
            perks={tier2}
            onSelect={onSelect} 
         />
         <Package 
            id="platinum"
            title="Platinum Peace of Mind 🐢💎"
            perks={tier3}
            onSelect={onSelect} 
         />
      </div>
   )
}