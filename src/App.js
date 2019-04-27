import React from 'react';
import './App.css';
import Card from "./components/card.js"
import Title from "./components/title";

function App() {
  return (
    <div className={"container"}>
        <Title/>
        <Card />
    </div>
  );
}

export default App;
