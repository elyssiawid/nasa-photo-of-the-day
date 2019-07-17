import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import NASAGrid from "./Components/NASAGrid";

const [date, setDate] = useState();
const [url, setURL] = useState();
useEffect(() => {
  Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res => {
      setMediaURL(res.data.url), setDate(res.data.date);
    })
    .catch(err => console.log(err));
}, []);

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <section>
        <b> Build a NASA card here </b>
      </section>
    </div>
  );
}

export default App;
