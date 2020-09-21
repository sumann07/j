import React from "react";
import "./styles.css";
import Clock from "../componenet/Clock";
import Hour from "../componenet/Hour";
import Minute from "../componenet/Minute";

export default function App() {
  return (
    <div className="App">
    <Clock style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <Hour/>
      <Minute style={{color:"green",size:"30"}}/>
      </Clock>
    </div>
  );
}
