import React, { useState, useEffect } from "react";
import axios from "axios";

function NASACard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-11"
      )
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("");
  }, []);

  return console.log(data);
}

export default NASACard;
