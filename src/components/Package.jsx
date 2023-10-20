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
   
   return(
      <div id={id} className="package-container">
         <div className="package-title">{title}</div>
         <ul>
            {perks.map((perk) => 
               <li key={perk}>{perk}</li>
            )}
         </ul>
         <button className="package-button" onClick={() => onSelect(tiers[id])}>Select this tier</button>
      </div>
   )
}