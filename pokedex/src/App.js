import React from "react"
import ReactDOM from "react-dom"
import PokeHolder from './components/PokeHolder'

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className='Container'>
        <PokeHolder />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
