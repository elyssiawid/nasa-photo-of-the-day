import React from "react";
import axios from "axios";

export default function NASACard({ props }) {
  return (
    <div className="nasa-card">
      {/* <p> Date: {props.cardData.date}</p>
      <p> Title: {props.cardData.title}</p>
      <p> Explanation: {props.cardData.explanation}</p>
      <p> URL: {props.cardData.url}</p>
      <img src={props.url} style={{ maxWidth: "700px" }} /> */}
    </div>
  );
}

// props : { nasaData: [ array of objects from nasa ]
