import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [date, setDate] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <div className="App">
      <p> Date: {date.toLocaleDateString()} </p>
      <h2> Time:{date.toLocaleTimeString()} </h2>
    </div>
  );
}

export default App;
