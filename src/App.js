import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [simulate, setSimulate] = useState({});
  return (
    <main>
      <div className="main-section">
        <Form simulate={simulate} setSimulate={setSimulate} />
        <Results simulate={simulate} />
      </div>
    </main>
  );
}

export default App;
