import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [focus, setFocus] = useState(false);

  return (
    <div className="App">
      {focus ? <h1>Good Jobbb</h1> : <h1>Focus More</h1>}

      <Button
        action={() => {
          setFocus(true);
        }}
        text=" I am learning React"
      />

      <Button
        action={() => {
          setFocus(false);
        }}
        text="I am Stuck"
      />
    </div> 
  );
}

export default App;
