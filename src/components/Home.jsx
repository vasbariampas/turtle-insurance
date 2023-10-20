import React from "react";
import "../styles/home.css";

export default function Home(){
   const turtleParagraph = `<span>Introducing <b>Turtle Insurance</b>, where we've got your shell-ter in the storm of turtle and tortoise attacks! 🐢🐢 Our team of slow and steady professionals is here to ensure that when those shelled assailants strike, you'll be covered faster than a hare in a race. From minor nibbles to the dreaded "Turtle Terrors," we've got you covered. Our policies are so affordable that you'll wonder why you ever lived in fear of those shelled assailants. So, don't be shell-fish, let Turtle Insurance be your rock in the reptilian rampage! Your safety is our top priority, and we promise not to crawl our way out of a claim. 🏝️🐢🏥</span>`;
   const aeschylusUrl = "https://www.youtube.com/embed/W9q0plyu764";
   return(
      <>
         <div id="home" className="home-container">
            <div className="home-text-container">
               <div className="home-text-paragraph" >
                  <div dangerouslySetInnerHTML={{__html: turtleParagraph}}></div>
               </div>
            </div>
            <div className="home-frame">
               <h2>Why don't you check this video?</h2>
               <iframe width="400" height="400" src={aeschylusUrl} title="Greek Playwright Aeschylus Was Killed By a Turtle" allowFullScreen={true} ></iframe>
            </div>
         </div>
      </>
   )
}
