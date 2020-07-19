import React from "react";
import "./App.css";
import { LargeButton } from "./components/LargeButton";

function App() {
  return (
    <div className='App'>
      <h1 className='header'>Large Buttons</h1>
      <div>
        <LargeButton color={"#0b6bf2"} text={"Close Shipment"} />
        <LargeButton color={"#0243eb"} text={"Close Shipment"} />
        <LargeButton color={"#dbe9fd"} text={"Close Shipment"} />
      </div>
    </div>
  );
}

export default App;
