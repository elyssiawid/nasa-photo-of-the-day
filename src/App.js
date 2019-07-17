import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NASAGrid from "../src/Components/NASAGrid";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    function dayone() {
      return axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-11"
      );
    }

    function daytwo() {
      return axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-08"
      );
    }

    function daythree() {
      return axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-09"
      );
    }

    axios
      .all([dayone(), daytwo(), daythree()])
      .then(res => {
        console.log("heyjune", res);
        setData(res);
      })
      .catch(err => console.log(err));
  }, []);
  console.log("state", data);

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <section>
        <NASAGrid data={data} />
      </section>
    </div>
  );
}

export default App;
