import React, { useState, useEffect } from "react";
import NASACard from "./NASACard";
import axios from "axios";

function NASAGrid(props) {
  console.log("nasagridprops", props.nasaData);
  const cards = props.nasaData.map(x => <NASACard />);
  return <div>Grid</div>;
}

export default NASAGrid;

const map1 = array1.map(x => x * 2);
