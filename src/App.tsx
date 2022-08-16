import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";


function App() {
  const [focus, setFocus] = useState(false);

  return (
    <div className="App">
      {focus ? <h1>Good Jobbb</h1> : <h1>Focus More</h1>}

      <Button
        onClick={() => {
          setFocus(true);
        }}
      >
        I am learning React
      </Button>

      <Button
        onClick={() => {
          setFocus(false);
        }}
      >
        I am Stuck
      </Button>
    </div>
  );
}

export default App;
