import React from "react";
import ReactDOM from "react-dom";
import css from "./App.css"

const parent = (
   <div>
    <ol>
        <li style={{color:"red"}}>item-1</li>
        <li style={{color:"yellow"}}>item-2</li>
        <li style={{color:"green"}}>item-3</li>
    </ol>
    <button className="btn">Click here!</button>
   </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);