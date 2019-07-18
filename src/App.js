import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NASAGrid from "../src/Components/NASAGrid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    // function dayone() {
    //   return axios.get(
    //     "https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=2019-07-11"
    //   );
    // }

    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=X7831OHO7jNbCUFp6ZquUbFjI2txHRDvsbay1fU4&date=2019-07-11"
      )
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Button">
        <Button color="danger">NASA</Button> Photo of the Day
      </h1>
      <section>
        <NASAGrid nasaData={data} />
      </section>
    </div>
  );
}

export default App;
