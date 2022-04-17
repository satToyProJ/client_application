import { useEffect, useState } from "react";
import "./App.css";
import TestBack from "./components/TestBack";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const api = axios.create({ baseURL: "http://54.180.113.96:8080" });

  useEffect(() => {
    api
      .get("/demo")
      .then((res) => {
        setMessage(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="App">
      <TestBack message={message} />
    </div>
  );
}

export default App;
