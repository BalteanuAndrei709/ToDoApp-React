import { useState } from "react";
import ToDo from "./components/ToDo";
import Header from "./components/header";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
