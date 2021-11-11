import { useEffect, useState } from "react";
import "./App.css";
import { getCurrentDate } from "./utils/getCurrentDate";
import axios from "axios";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => setEvents(response.data));
  }, []);

  return (
    <div className="App">
      <div>{getCurrentDate()}</div>
      <div>{events.map((event) => event.type)} </div>
    </div>
  );
}

export default App;
