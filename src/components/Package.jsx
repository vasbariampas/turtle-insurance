import React from "react";

export default function Package({
   id,
   title,
   perks,
   onSelect
}){
   const tiers = {
      essential : "Essential Shell Shield",
      premium : "Premium Reptile Resilience",
      platinum : "Platinum Peace of Mind"
   }

   function onButtonClick(e){
      e.preventDefault();
      onSelect(tiers[id]);
   }
   
   return(
      <div id={id} className="package-container">
         <div className="package-title">{title}</div>
         <ul>
            {perks.map((perk) => 
               <li key={perk}>{perk}</li>
            )}
         </ul>
         <button className="package-button" onClick={onButtonClick}>Select this tier</button>
      </div>
   )
}